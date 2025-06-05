import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { breadCrumbItems, pageSelection } from '../../../../shared/models/models';
import { PaginationService } from '../../../../shared/custom-pagination/pagination.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Sort } from '@angular/material/sort';
import { EmployeeDetailsService } from '../../../../shared/services/employee/employee-details.service';
import { EmployeeDetailsModel } from '../../../../shared/models/employeeDetails';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  standalone: false
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  public routes = routes;
  public breadCrumbItems: breadCrumbItems[] = [];

  public employees: EmployeeDetailsModel[] = [];
  public actualData: EmployeeDetailsModel[] = [];

  public tableData: EmployeeDetailsModel[] = [];
  public tableDataCopy: EmployeeDetailsModel[] = [];

  public dataSource!: MatTableDataSource<EmployeeDetailsModel>;
  public serialNumberArray: number[] = [];

  public pageSelection: pageSelection[] = [];
  public pageSize = 10;
  public currentPage = 1;
  public skip = 0;
  public limit = this.pageSize;
  public totalData = 0;

  public searchDataValue = '';
  public initChecked = false;
  public showFilter = false;

  public loading = false;
  public errorMessage = '';

  bsValue = new Date();
  maxDate = new Date();

  public password: boolean[] = [false, false, false, false];
  isOpen = false;

  constructor(
    private employeeService: EmployeeDetailsService,
    private router: Router,
    private pagination: PaginationService
  ) {
    this.breadCrumbItems = [
      { label: 'Employee' },
      { label: 'Employee List', active: true }
    ];
  }

  ngOnInit(): void {
    this.fetchEmployees();
  }

  ngOnDestroy(): void {
    this.isOpen = false;
  }

  togglePassword(index: number): void {
    this.password[index] = !this.password[index];
  }

  openSuccessModal(): void {
    this.isOpen = !this.isOpen;
  }

  fetchEmployees(): void {
    this.loading = true;
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        this.employees = data;
        this.actualData = data;
        this.totalData = data.length;
        this.currentPage = 1;
        this.setPageData();
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load employees.';
        this.loading = false;
        console.error(error);
      }
    });
  }

  setPageData(): void {
    this.skip = (this.currentPage - 1) * this.pageSize;
    this.limit = this.skip + this.pageSize;

    this.tableData = this.employees.slice(this.skip, this.limit);
    this.tableDataCopy = [...this.tableData];
    this.dataSource = new MatTableDataSource<EmployeeDetailsModel>(this.tableData);

    // Pass pagination data
    this.pagination.calculatePageSize.next({
      totalData: this.totalData,
      pageSize: this.pageSize,
      tableData: this.tableData,
      tableDataCopy: this.tableDataCopy,
      serialNumberArray: this.serialNumberArray
    });
  }

  changePageSize(size: number): void {
    this.pageSize = size;
    this.currentPage = 1;
    this.setPageData();
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.setPageData();
  }

  sortData(sort: Sort): void {
    const { active, direction } = sort;

    if (!active || direction === '') {
      this.tableData = [...this.tableDataCopy];
      return;
    }

    this.tableData = this.tableData.sort((a, b) => {
      const aVal = this.getNestedValue(a, active);
      const bVal = this.getNestedValue(b, active);

      if (aVal < bVal) return direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    this.dataSource = new MatTableDataSource(this.tableData);
  }

  getNestedValue(item: EmployeeDetailsModel, key: string): any {
    switch (key) {
      case 'Name': return item.familyInformation?.name?.toLowerCase() || '';
      case 'Email': return item.basicInformation?.email?.toLowerCase() || '';
      case 'Phone': return item.contactInformation?.contactPrimary || '';
      case 'Designation': return item.experience?.designation?.toLowerCase() || '';
      default: return (item as any)[key] || '';
    }
  }

  selectAll(checked: boolean): void {
    this.initChecked = checked;
    this.tableData.forEach((item) => {
      (item as any).isSelected = this.initChecked;
    });
  }

  // trackById(index: number, item: EmployeeDetailsModel): number {
  //   return item.id;
  // }
}
