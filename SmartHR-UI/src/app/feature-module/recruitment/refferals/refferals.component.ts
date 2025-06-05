import { Component, OnDestroy} from '@angular/core';

import { routes } from '../../../shared/routes/routes';
import { apiResultFormat, breadCrumbItems, ReferralInfo, pageSelection } from '../../../shared/models/models';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../../../shared/data/data.service';
import { Router } from '@angular/router';
import { PaginationService, tablePageSize } from '../../../shared/custom-pagination/pagination.service';
import { Sort } from '@angular/material/sort';

@Component({
    selector: 'app-refferals',
    templateUrl: './refferals.component.html',
    styleUrl: './refferals.component.scss',
    standalone: false
})
export class RefferalsComponent implements OnDestroy {
  public routes = routes;
  initChecked = false;
  // pagination variables
  public pageSize = 10;
  public tableData: ReferralInfo[] = [];
  public tableDataCopy: ReferralInfo[] = [];
  public actualData: ReferralInfo[] = [];
  public currentPage = 1;
  public skip = 0;
  public limit: number = this.pageSize;
  public serialNumberArray: number[] = [];
  public totalData = 0;
  showFilter = false;
  public pageSelection: pageSelection[] = [];
  dataSource!: MatTableDataSource<ReferralInfo>;
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
      { label: 'Recruitment' },
      { label: 'Refferals', active: true }
  ];
    this.data.getRefferalsList().subscribe((apiRes: apiResultFormat) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
        if (this.router.url == this.routes.Refferals) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  private getTableData(pageOption: pageSelection): void {
    this.data.getRefferalsList().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.tableDataCopy = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: ReferralInfo, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.tableDataCopy.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<ReferralInfo>(this.actualData);
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
}
