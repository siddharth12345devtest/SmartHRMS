import { Component, ViewChild } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { apiResultFormat, breadCrumbItems, invoiceReport } from '../../../../shared/models/models';
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
    selector: 'app-invoice-report',
    templateUrl: './invoice-report.component.html',
    styleUrl: './invoice-report.component.scss',
    standalone: false
})
export class InvoiceReportComponent {
  public routes = routes;
  initChecked = false;
  // pagination variables
  public pageSize = 10;
  public tableData:  invoiceReport[] = [];
  public tableDataCopy:  invoiceReport[] = [];
  public actualData:  invoiceReport[] = [];
  public currentPage = 1;
  public skip = 0;
  public limit: number = this.pageSize;
  public serialNumberArray: number[] = [];
  public totalData = 0;
  showFilter = false;
  public pageSelection: pageSelection[] = [];
  dataSource!: MatTableDataSource< invoiceReport>;
  public searchDataValue = '';
  breadCrumbItems: breadCrumbItems[] =[];
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  
  public invoice_chart: Partial<ChartOptions> | any;
  @ViewChild('chart') chart!: ChartComponent;
  constructor(
    private data: DataService,
    private router: Router,
    private pagination: PaginationService
  ) {
    this.breadCrumbItems = [
      { label: 'HR' },
      { label: 'Invoice Report', active: true }
  ];
  this.data.getinvoiceReport().subscribe((apiRes: apiResultFormat) => {
    this.actualData = apiRes.data;
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.invoicereport) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
    
  });
  this.maxDate.setDate(this.maxDate.getDate() + 7);
  this.bsRangeValue = [this.bsValue, this.maxDate];
}
private getTableData(pageOption: pageSelection): void {
  this.data.getinvoiceReport().subscribe((apiRes: apiResultFormat) => {
    this.tableData = [];
    this.tableDataCopy = [];
    this.serialNumberArray = [];
    this.totalData = apiRes.totalData;
    apiRes.data.map((res:  invoiceReport, index: number) => {
      const serialNumber = index + 1;
      if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
        res.sNo = serialNumber;
        this.tableData.push(res);
        this.tableDataCopy.push(res);
        this.serialNumberArray.push(serialNumber);
      }
    });
    this.dataSource = new MatTableDataSource< invoiceReport>(this.actualData);
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
  this.invoice_chart={
    series: [{
      name: 'Total Invoices',
      data: [40, 30, 40, 30, 40, 30]
    }, {
      name: 'Paid Invoices',
      data: [20, 10, 20, 10, 20, 10]
    }],
    chart: {
      height: 250,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    xaxis: {
      type: 'category',
      categories: ["January", "February", "March", "April", "May", "June", "July"]
    },
    yaxis: {
      labels: {
        offsetX: -15,
        formatter: function (value : any) {
          return value + "k"; // Display values with 'k' suffix
        }
      },
    },
    tooltip: {
      x: {
        formatter: function (value : any) {
          return value; // Tooltip shows month labels
        }
      },
      y: {
        formatter: function (value : any) {
          return value + "k"; // Tooltip shows amounts with 'k' suffix
        }
      }
    },
    colors: ['#FD3995','#FF9F43'],
    
  }
}
}