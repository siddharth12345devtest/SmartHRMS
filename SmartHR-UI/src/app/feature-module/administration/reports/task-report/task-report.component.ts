import { Component, ViewChild,OnInit } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { apiResultFormat, breadCrumbItems, taskReport } from '../../../../shared/models/models';
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
    selector: 'app-task-report',
    templateUrl: './task-report.component.html',
    styleUrl: './task-report.component.scss',
    standalone: false
})
export class TaskReportComponent {
  public routes = routes;
  initChecked = false;
  // pagination variables
  public pageSize = 10;
  public tableData:  taskReport[] = [];
  public tableDataCopy:  taskReport[] = [];
  public actualData:  taskReport[] = [];
  public currentPage = 1;
  public skip = 0;
  public limit: number = this.pageSize;
  public serialNumberArray: number[] = [];
  public totalData = 0;
  showFilter = false;
  public pageSelection: pageSelection[] = [];
  dataSource!: MatTableDataSource< taskReport>;
  public searchDataValue = '';
  breadCrumbItems: breadCrumbItems[] =[];
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  public task_chart: Partial<ChartOptions> | any;
  public smalltask1: Partial<ChartOptions> | any;
  public smalltask2: Partial<ChartOptions> | any;
  public smalltask3: Partial<ChartOptions> | any;
  public smalltask4: Partial<ChartOptions> | any;
  @ViewChild('chart') chart!: ChartComponent;
  constructor(
    private data: DataService,
    private router: Router,
    private pagination: PaginationService
  ) {
    this.breadCrumbItems = [
      { label: 'HR' },
      { label: 'Task Report', active: true }
  ];
  this.data.gettaskReport().subscribe((apiRes: apiResultFormat) => {
    this.actualData = apiRes.data;
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.taskreport) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
    
  });
  this.maxDate.setDate(this.maxDate.getDate() + 7);
  this.bsRangeValue = [this.bsValue, this.maxDate];
}
private getTableData(pageOption: pageSelection): void {
  this.data.gettaskReport().subscribe((apiRes: apiResultFormat) => {
    this.tableData = [];
    this.tableDataCopy = [];
    this.serialNumberArray = [];
    this.totalData = apiRes.totalData;
    apiRes.data.map((res:  taskReport, index: number) => {
      const serialNumber = index + 1;
      if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
        res.sNo = serialNumber;
        this.tableData.push(res);
        this.tableDataCopy.push(res);
        this.serialNumberArray.push(serialNumber);
      }
    });
    this.dataSource = new MatTableDataSource< taskReport>(this.actualData);
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
ngOnInit(): void{
  this.task_chart = {
  chart: {
    width: 220,
    type: 'donut',
    toolbar: {
      show: false,
    }
  },
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

  series: [40, 30, 20, 10],
  colors: ['#03C95A', '#0DCAF0', '#FFC107', '#AB47BC'],
  labels: ['Completed ', 'Pending', 'Inprogress ', 'On Hold '],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        show: false
      }
    }
  }],
  legend: {
    show: false
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
    y: '50%',
  }
};
this.smalltask1 = {
  chart: {
    width: 180,
    height:100,
    type: 'donut',
    toolbar: {
      show: false,
    }
  },
  plotOptions: {
    pie: {
      donut: {
        size: '30%' // Adjusts the size of the donut hole
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  series: [90,10],
  colors: ['#F26522','rgba(67, 87, 133, .09)'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        show: false
      }
    }
  }],
  legend: {
    show: false
  },
  labels:{
    show:false
  }
};
this.smalltask2 = {
  chart: {
    width: 180,
    height:100,
    type: 'donut',
    toolbar: {
      show: false,
    }
  },
  plotOptions: {
    pie: {
      donut: {
        size: '30%' // Adjusts the size of the donut hole
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  series: [60,40],
  colors: ['#03C95A','rgba(67, 87, 133, .09)'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        show: false
      }
    }
  }],
  legend: {
    show: false
  },
};
this.smalltask3 = {
  chart: {
    width: 180,
    height:100,
    type: 'donut',
    toolbar: {
      show: false,
    }
  },
  plotOptions: {
    pie: {
      donut: {
        size: '30%' // Adjusts the size of the donut hole
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  series: [30,70],
  colors: ['#FD3995','rgba(67, 87, 133, .09)'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        show: false
      }
    }
  }],
  legend: {
    show: false
  },
};
this.smalltask4 = {
  chart: {
    width: 180,
    height:100,
    type: 'donut',
    toolbar: {
      show: false,
    }
  },
  plotOptions: {
    pie: {
      donut: {
        size: '30%' // Adjusts the size of the donut hole
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  series: [20,80],
  colors: ['#0DCAF0','rgba(67, 87, 133, .09)'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        show: false
      }
    }
  }],
  legend: {
    show: false
  },
};
}
}
