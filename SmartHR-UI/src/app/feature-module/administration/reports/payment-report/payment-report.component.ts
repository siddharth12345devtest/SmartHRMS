import { Component, ViewChild } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { apiResultFormat, breadCrumbItems, pageSelection, paymentReport } from '../../../../shared/models/models';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../../../../shared/data/data.service';
import { Router } from '@angular/router';
import { PaginationService, tablePageSize } from '../../../../shared/custom-pagination/pagination.service';
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

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
}
Chart.register(...registerables);

@Component({
    selector: 'app-payment-report',
    templateUrl: './payment-report.component.html',
    styleUrl: './payment-report.component.scss',
    standalone: false
})
export class PaymentReportComponent {
  public routes = routes;
  initChecked = false;
  // pagination variables
  public pageSize = 10;
  public tableData:  paymentReport[] = [];
  public tableDataCopy:  paymentReport[] = [];
  public actualData:  paymentReport[] = [];
  public currentPage = 1;
  public skip = 0;
  public limit: number = this.pageSize;
  public serialNumberArray: number[] = [];
  public totalData = 0;
  showFilter = false;
  public pageSelection: pageSelection[] = [];
  dataSource!: MatTableDataSource< paymentReport>;
  public searchDataValue = '';
  breadCrumbItems: breadCrumbItems[] =[];
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  public payment_chart: Partial<ChartOptions> | any;
  @ViewChild('chart') chart!: ChartComponent;
  constructor(
    private data: DataService,
    private router: Router,
    private pagination: PaginationService
  ) {
    this.breadCrumbItems = [
      { label: 'HR' },
      { label: 'Payment Report', active: true }
  ];
  this.data.getpaymentReport().subscribe((apiRes: apiResultFormat) => {
    this.actualData = apiRes.data;
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.paymentsreport) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
    
  });
  this.maxDate.setDate(this.maxDate.getDate() + 7);
  this.bsRangeValue = [this.bsValue, this.maxDate];
}
private getTableData(pageOption: pageSelection): void {
  this.data.getpaymentReport().subscribe((apiRes: apiResultFormat) => {
    this.tableData = [];
    this.tableDataCopy = [];
    this.serialNumberArray = [];
    this.totalData = apiRes.totalData;
    apiRes.data.map((res:  paymentReport, index: number) => {
      const serialNumber = index + 1;
      if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
        res.sNo = serialNumber;
        this.tableData.push(res);
        this.tableDataCopy.push(res);
        this.serialNumberArray.push(serialNumber);
      }
    });
    this.dataSource = new MatTableDataSource< paymentReport>(this.actualData);
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
  this.payment_chart={
    series: [44, 55, 41, 17],
    chart: {
      type: 'donut',
    },
    colors: ['#0DCAF0', '#FD3995', '#AB47BC', '#FFC107'],
    labels: ['Paypal', 'Debit Card', 'Bank Transfer', 'Credit Card'],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        stroke: {
          show: true,
          width: 10, // Width of the gap
          colors: ['#FFFFFF'] // Color of the gap
        },
        donut: {
          size: '80%' // Adjusts the size of the donut hole
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false // Set this to false to hide the legend
    },
    annotations: {
      position: 'front', // Ensure it appears above other elements
      style: {
        fontSize: '24px', // Adjust font size
        fontWeight: 'bold',
        color: '#000000' // Change color if needed
      },
      text: {
        // Set the annotation text
        text: '+14%',
        // Optional styling for the text box
        background: {
          enabled: true,
          foreColor: '#FFFFFF', // Text color
          border: '#000000', // Border color
          borderWidth: 1,
          borderRadius: 2,
          opacity: 0.7
        }
      },
      x: '50%', // Center horizontally
      y: '50%', // Center vertically
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          show: false // Also hide legend on smaller screens
        }
      }
    }]
  }
}
}
