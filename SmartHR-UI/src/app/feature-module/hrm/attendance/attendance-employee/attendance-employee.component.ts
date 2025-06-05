import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { apiResultFormat, attendanceemployee, breadCrumbItems } from '../../../../shared/models/models';
import { pageSelection, PaginationService, tablePageSize } from '../../../../shared/custom-pagination/pagination.service';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../../../../shared/data/data.service';
import { Router } from '@angular/router';
import { Sort } from '@angular/material/sort';

@Component({
    selector: 'app-attendance-employee',
    templateUrl: './attendance-employee.component.html',
    styleUrl: './attendance-employee.component.scss',
    standalone: false
})
export class AttendanceEmployeeComponent {
  @ViewChildren('circleProgress') circleProgressElements!: QueryList<ElementRef>;

  leftTransform: string = 'rotate(0deg)';
  rightTransform: string = 'rotate(0deg)';
  public routes = routes;
  initChecked = false;
  // pagination variables
  public pageSize = 10;
  public tableData:  attendanceemployee[] = [];
  public tableDataCopy:  attendanceemployee[] = [];
  public actualData:  attendanceemployee[] = [];
  public currentPage = 1;
  public skip = 0;
  public limit: number = this.pageSize;
  public serialNumberArray: number[] = [];
  public totalData = 0;
  showFilter = false;
  public pageSelection: pageSelection[] = [];
  dataSource!: MatTableDataSource< attendanceemployee>;
  public searchDataValue = '';
  breadCrumbItems: breadCrumbItems[] =[];
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  constructor(
    private data: DataService,
    private router: Router,
    private pagination: PaginationService
  ) {
    this.breadCrumbItems = [
      { label: 'Employee' },
      { label: 'Attendance Employee', active: true }
  ];
  this.data.getattendanceemployee().subscribe((apiRes: apiResultFormat) => {
    this.actualData = apiRes.data;
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.attendanceemployee) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
    
  });
  this.maxDate.setDate(this.maxDate.getDate() + 7);
  this.bsRangeValue = [this.bsValue, this.maxDate];
}
private getTableData(pageOption: pageSelection): void {
  this.data.getattendanceemployee().subscribe((apiRes: apiResultFormat) => {
    this.tableData = [];
    this.tableDataCopy = [];
    this.serialNumberArray = [];
    this.totalData = apiRes.totalData;
    apiRes.data.map((res:  attendanceemployee, index: number) => {
      const serialNumber = index + 1;
      if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
        res.sNo = serialNumber;
        this.tableData.push(res);
        this.tableDataCopy.push(res);
        this.serialNumberArray.push(serialNumber);
      }
    });
    this.dataSource = new MatTableDataSource< attendanceemployee>(this.actualData);
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
ngAfterViewInit() {
  this.updateProgress();
}
updateProgress() {
  this.circleProgressElements.forEach(elementRef => {
    const element = elementRef.nativeElement;
    const value = parseInt(element.getAttribute('data-value'), 10);
    const left = element.querySelector('.progress-left .progress-bar');
    const right = element.querySelector('.progress-right .progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.style.transform = 'rotate(' + this.percentageToDegrees(value) + 'deg)';
      } else {
        right.style.transform = 'rotate(180deg)';
        left.style.transform = 'rotate(' + this.percentageToDegrees(value - 50) + 'deg)';
      }
    }
  });
}

percentageToDegrees(percentage: number): number {
  return (percentage / 100) * 360;
}


}
