import { Component, OnInit } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { apiResultFormat, breadCrumbItems, designation } from '../../../../shared/models/models';
import { pageSelection, PaginationService, tablePageSize } from '../../../../shared/custom-pagination/pagination.service';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../../../../shared/data/data.service';
import { Router } from '@angular/router';
import { Sort } from '@angular/material/sort';
import { DesignationDetailsService } from '../../../../shared/services/designation/designation-details.service';
import { DesignationDetailsModel } from '../../../../shared/models/designationDetails';

@Component({
    selector: 'app-designations',
    templateUrl: './designations.component.html',
    styleUrl: './designations.component.scss',
    standalone: false
})
export class DesignationsComponent implements OnInit {
  public routes = routes;
  initChecked = false;
  // pagination variables
  public pageSize = 10;
  public designations: DesignationDetailsModel[] = [];
  public tableData: DesignationDetailsModel[] = [];
  public tableDataCopy: DesignationDetailsModel[] = [];
  public actualData: DesignationDetailsModel[] = [];
  public currentPage = 1;
  public skip = 0;
  public limit: number = this.pageSize;
  public serialNumberArray: number[] = [];
  public totalData = 0;
  showFilter = false;
  public pageSelection: pageSelection[] = [];
  dataSource!: MatTableDataSource<DesignationDetailsModel>;
  public searchDataValue = '';
  breadCrumbItems: breadCrumbItems[] =[];
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  public password: boolean[] = [false,false,false,false];
  isOpen = false
  togglePassword(index: number) {
    this.password[index] = !this.password[index];
  }
  openSuccessModal() {
    this.isOpen = !this.isOpen;
  }
  ngOnDestroy(): void {
    this.isOpen = false
  }
  constructor(
    private data: DataService,
    private router: Router,
    private pagination: PaginationService,
    private designationService: DesignationDetailsService
  ) 
    {
    this.breadCrumbItems = [
      { label: 'Employee' },
      { label: 'Departments', active: true }
  ];
    // this.data.getdesignations().subscribe((apiRes: apiResultFormat) => {
    //   this.actualData = apiRes.data;
    //   this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
    //     if (this.router.url == this.routes.designations) {
    //       this.getTableData({skip:res.skip , limit:res.limit});
    //       this.pageSize = res.pageSize;
    //     }
    //   });
      
    // });
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  ngOnInit():void{
    this.fetchDesignations();
  }

  fetchDesignations() {
  this.designationService.getAllDesignations().subscribe({
    next: (data: DesignationDetailsModel[]) => {
      console.log("Fetched Designation Data:", data); // ✅ Check the structure
      this.tableData = data;
      this.tableDataCopy = [...data];
      this.totalData = data.length;
      this.currentPage = 1;
    },
    error: (error) => {
      console.error("Error fetching designations", error);
    }
  });
}



  private getTableData(pageOption: pageSelection): void {
    this.data.getdesignations().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.tableDataCopy = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: DesignationDetailsModel, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          // res.sNo = serialNumber;
          this.tableData.push(res);
          this.tableDataCopy.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<DesignationDetailsModel>(this.actualData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        tableDataCopy: this.tableDataCopy,
        serialNumberArray: this.serialNumberArray,
      });
    });
  }

  public searchData(value: string): void {
    if (value == '') {
      this.tableData = this.tableDataCopy;
    } else {
      this.dataSource.filter = value.trim().toLowerCase();
      this.tableData = this.dataSource.filteredData;
    }
  }

  public sortData(sort: Sort) {
    const data = this.tableData.slice();

    if (!sort.active || sort.direction === '') {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = (a as never)[sort.active];

        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
      this.dataSource = new MatTableDataSource(this.tableData);
    }
  }
  public changePageSize(pageSize: number): void {
    this.pageSelection = [];
    this.limit = pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize,
    });
  }
  selectAll(initChecked: boolean) {
    if (!initChecked) {
      // this.tableData.forEach((f) => {
      //   f.isSelected = true;
      // });
    } else {
      // this.tableData.forEach((f) => {
      //   f.isSelected = false;
      // });
    }
  }
  trackByFn(index: number, item: DesignationDetailsModel): number {
  return item.designationId;
}
}
