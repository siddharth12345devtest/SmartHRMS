import { Component, ViewChild } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { apiResultFormat, breadCrumbItems, dailyReport } from '../../../../shared/models/models';
import { pageSelection, PaginationService, tablePageSize } from '../../../../shared/custom-pagination/pagination.service';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../../../../shared/data/data.service';
import { Router } from '@angular/router';
import { Sort } from '@angular/material/sort';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ChartComponent,
} from 'ng-apexcharts';
import { Chart, registerables } from 'chart.js';
export interface ChartOptions  {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
@Component({
    selector: 'app-daily-report',
    templateUrl: './daily-report.component.html',
    styleUrl: './daily-report.component.scss',
    standalone: false
})
export class DailyReportComponent {
  public routes = routes;
  initChecked = false;
  // pagination variables
  public pageSize = 10;
  public tableData:  dailyReport[] = [];
  public tableDataCopy:  dailyReport[] = [];
  public actualData:  dailyReport[] = [];
  public currentPage = 1;
  public skip = 0;
  public limit: number = this.pageSize;
  public serialNumberArray: number[] = [];
  public totalData = 0;
  showFilter = false;
  public pageSelection: pageSelection[] = [];
  dataSource!: MatTableDataSource< dailyReport>;
  public searchDataValue = '';
  breadCrumbItems: breadCrumbItems[] =[];
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  public daily_chart: Partial<ChartOptions> | any;
  @ViewChild('chart') chart!: ChartComponent;
  constructor(
    private data: DataService,
    private router: Router,
    private pagination: PaginationService
  ) {
    this.breadCrumbItems = [
      { label: 'HR' },
      { label: 'Daily Report', active: true }
  ];
  this.data.getdailyReport().subscribe((apiRes: apiResultFormat) => {
    this.actualData = apiRes.data;
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.dailyreport) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
    
  });
  this.maxDate.setDate(this.maxDate.getDate() + 7);
  this.bsRangeValue = [this.bsValue, this.maxDate];
}
private getTableData(pageOption: pageSelection): void {
  this.data.getdailyReport().subscribe((apiRes: apiResultFormat) => {
    this.tableData = [];
    this.tableDataCopy = [];
    this.serialNumberArray = [];
    this.totalData = apiRes.totalData;
    apiRes.data.map((res:  dailyReport, index: number) => {
      const serialNumber = index + 1;
      if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
        res.sNo = serialNumber;
        this.tableData.push(res);
        this.tableDataCopy.push(res);
        this.serialNumberArray.push(serialNumber);
      }
    });
    this.dataSource = new MatTableDataSource< dailyReport>(this.actualData);
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
ngOnInit():void{
  this.daily_chart={
    series: [{
      name: "Present",
      data: [60, 40, 30, 20, 70, ] // Sample data for Present
    }, {
      name: "Absent",
      data: [20, 60, 45, 60, 80,] // Sample data for Absent
    }],
    chart: {
      height: 130, // Changed height
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
     },
    stroke: {
      curve: 'smooth' // You can change this to 'straight' if preferred
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    yaxis: {
      labels: {
        offsetX: -15,
      }
    },
    colors: ['#4CAF50', '#F44336'] // Green for Present, Red for Absent
  }
}
}
