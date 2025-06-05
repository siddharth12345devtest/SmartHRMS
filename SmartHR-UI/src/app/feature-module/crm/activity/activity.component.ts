import { Component, HostListener, OnDestroy, ViewChild} from '@angular/core';

import { routes } from '../../../shared/routes/routes';
import { apiResultFormat, breadCrumbItems, Activity, pageSelection } from '../../../shared/models/models';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../../../shared/data/data.service';
import { Router } from '@angular/router';
import { PaginationService, tablePageSize } from '../../../shared/custom-pagination/pagination.service';
import { Sort } from '@angular/material/sort';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styleUrl: './activity.component.scss',
    standalone: false
})
export class ActivityComponent implements OnDestroy {
  public routes = routes;
  initChecked = false;
  selectedTime: Date = new Date(); 
  dropdownOpen = false;
  dropdownOpen1 = false;
  dropdownOpen2 = false;
  @ViewChild(BsDatepickerDirective, { static: false })
  datepicker?: BsDatepickerDirective;
  @HostListener('window:scroll')
  onScrollEvent() {
    this.datepicker?.hide();
  }
  // pagination variables
  public pageSize = 10;
  public tableData: Activity[] = [];
  public tableDataCopy: Activity[] = [];
  public actualData: Activity[] = [];
  public currentPage = 1;
  public skip = 0;
  public limit: number = this.pageSize;
  public serialNumberArray: number[] = [];
  public totalData = 0;
  showFilter = false;
  public pageSelection: pageSelection[] = [];
  dataSource!: MatTableDataSource<Activity>;
  public searchDataValue = '';
  breadCrumbItems: breadCrumbItems[] =[];
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
    private pagination: PaginationService
  ) {
    this.breadCrumbItems = [
      { label: 'CRM' },
      { label: 'Activity List', active: true }
  ];
    this.data.getActivity().subscribe((apiRes: apiResultFormat) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
        if (this.router.url == this.routes.activities) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  private getTableData(pageOption: pageSelection): void {
    this.data.getActivity().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.tableDataCopy = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: Activity, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.tableDataCopy.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<Activity>(this.actualData);
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
      this.tableData.forEach((f) => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach((f) => {
        f.isSelected = false;
      });
    }
  }

  // Open the dropdown
  openDropdown() {
    this.dropdownOpen = true;
  }

  // Close the dropdown
  closeDropdown() {
    this.dropdownOpen = false;
  }

  // Update displayed time when selection changes
  onTimeChange() {
    this.closeDropdown(); // Close dropdown after time selection
  }
   // Open the dropdown
   openDropdown1() {
    this.dropdownOpen1 = true;
  }

  // Close the dropdown
  closeDropdown1() {
    this.dropdownOpen1 = false;
  }

  // Update displayed time when selection changes
  onTimeChange1() {
    this.closeDropdown1(); // Close dropdown after time selection
  }

     // Open the dropdown
     openDropdown2() {
      this.dropdownOpen2 = true;
    }
  
    // Close the dropdown
    closeDropdown2() {
      this.dropdownOpen2 = false;
    }
  
    // Update displayed time when selection changes
    onTimeChange2() {
      this.closeDropdown2(); // Close dropdown after time selection
    }
}
