import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { ExpensesReportComponent } from './expenses-report/expenses-report.component';
import { InvoiceReportComponent } from './invoice-report/invoice-report.component';
import { PaymentReportComponent } from './payment-report/payment-report.component';
import { ProjectReportComponent } from './project-report/project-report.component';
import { TaskReportComponent } from './task-report/task-report.component';
import { UserReportComponent } from './user-report/user-report.component';
import { EmployeeReportComponent } from './employee-report/employee-report.component';
import { PayslipReportComponent } from './payslip-report/payslip-report.component';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';
import { LeaveReportComponent } from './leave-report/leave-report.component';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { SharedModule } from '../../../shared/shared-module';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';


@NgModule({
  declarations: [
    ReportsComponent,
    ExpensesReportComponent,
    InvoiceReportComponent,
    PaymentReportComponent,
    ProjectReportComponent,
    TaskReportComponent,
    UserReportComponent,
    EmployeeReportComponent,
    PayslipReportComponent,
    AttendanceReportComponent,
    LeaveReportComponent,
    DailyReportComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class ReportsModule { }
