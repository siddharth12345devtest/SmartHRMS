import { Component,OnInit, ViewChild } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { breadCrumbItems } from '../../../../shared/models/models';
import { ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from 'chart.js';

@Component({
    selector: 'app-ticket-grid',
    templateUrl: './ticket-grid.component.html',
    styleUrl: './ticket-grid.component.scss',
    standalone: false
})
export class TicketGridComponent implements OnInit {
  public routes=routes;
  @ViewChild('chart') chart!: ChartComponent;
  public Areachart: Partial<ChartOptions> | any;
  public Areachart2: Partial<ChartOptions> | any;
  public Areachart3: Partial<ChartOptions> | any;
  public Areachart4: Partial<ChartOptions> | any;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  breadCrumbItems: breadCrumbItems[] =[];
  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
    this.breadCrumbItems = [
      { label: 'Employee' },
      { label: 'Tickets', active: true }
  ];
  }
  ngOnInit(): void {
    this.Areachart = {
      series: [{
        name: "Messages",
        data: [8,5,6,3,4,6,7,3,8,6,4,7]
      }],

      chart: {
        type: 'bar',
        width: 70,
        height:70,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: false,
          top: 3,
          left: 14,
          blur: 4,
          opacity: .12,
          color: "#fff"
        },
        sparkline: {
          enabled: !0
        }
      },
      markers: {
        size: 0,
        colors: ["#F26522"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: !0,
        width: 2.5,
        curve: "smooth"
      },
      colors: ["#FF6F28"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        labels: {
          show: false,}
      },
      tooltip: {
        show:false,
        theme: "dark",
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },

        marker: {
          show: false
        }
      }
    };
    this.Areachart4 = {
      series: [{
        name: "Messages",
        data: [8,5,6,3,4,6,7,3,8,6,4,7]
      }],

      chart: {
        type: 'bar',
        width: 70,
        height:70,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: false,
          top: 3,
          left: 14,
          blur: 4,
          opacity: .12,
          color: "#fff"
        },
        sparkline: {
          enabled: !0
        }
      },
      markers: {
        size: 0,
        colors: ["#F26522"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: !0,
        width: 2.5,
        curve: "smooth"
      },
      colors: ["#0DCAF0"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        labels: {
          show: false,}
      },
      tooltip: {
        show:false,
        theme: "dark",
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },

        marker: {
          show: false
        }
      }
    };
    this.Areachart3 = {
      series: [{
        name: "Messages",
        data: [8,5,6,3,4,6,7,3,8,6,4,7]
      }],

      chart: {
        type: 'bar',
        width: 70,
        height:70,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: false,
          top: 3,
          left: 14,
          blur: 4,
          opacity: .12,
          color: "#fff"
        },
        sparkline: {
          enabled: !0
        }
      },
      markers: {
        size: 0,
        colors: ["#F26522"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: !0,
        width: 2.5,
        curve: "smooth"
      },
      colors: ["#02C95A"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        labels: {
          show: false,}
      },
      tooltip: {
        show:false,
        theme: "dark",
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },

        marker: {
          show: false
        }
      }
    };
    this.Areachart2 = {
      series: [{
        name: "Messages",
        data: [8,5,6,3,4,6,7,3,8,6,4,7]
      }],

      chart: {
        type: 'bar',
        width: 70,
        height:70,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: false,
          top: 3,
          left: 14,
          blur: 4,
          opacity: .12,
          color: "#fff"
        },
        sparkline: {
          enabled: !0
        }
      },
      markers: {
        size: 0,
        colors: ["#F26512"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: !0,
        width: 2.5,
        curve: "smooth"
      },
      colors: ["#AB47BC"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        labels: {
          show: false,}
      },
      tooltip: {
        show:false,
        theme: "dark",
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },

        marker: {
          show: false
        }
      }
    };
  }

}
