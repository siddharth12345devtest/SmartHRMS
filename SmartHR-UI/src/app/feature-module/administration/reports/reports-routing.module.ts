import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { EmployeeReportComponent } from './employee-report/employee-report.component';
import { ExpensesReportComponent } from './expenses-report/expenses-report.component';
import { InvoiceReportComponent } from './invoice-report/invoice-report.component';
import { LeaveReportComponent } from './leave-report/leave-report.component';
import { PaymentReportComponent } from './payment-report/payment-report.component';
import { PayslipReportComponent } from './payslip-report/payslip-report.component';
import { ProjectReportComponent } from './project-report/project-report.component';
import { TaskReportComponent } from './task-report/task-report.component';
import { UserReportComponent } from './user-report/user-report.component';

const routes: Routes = [
  { path: '', 
    component: ReportsComponent,
    children:[
      {path:'attendance-report',component:AttendanceReportComponent},
      {path:'daily-report',component:DailyReportComponent},
      {path:'employee-report',component:EmployeeReportComponent},
      {path:'expenses-report',component:ExpensesReportComponent},
      {path:'invoice-report',component:InvoiceReportComponent},
      {path:'leave-report',component:LeaveReportComponent},
      {path:'payment-report',component:PaymentReportComponent},
      {path:'payslip-report',component:PayslipReportComponent},
      {path:'project-report',component:ProjectReportComponent},
      {path:'task-report',component:TaskReportComponent},
      {path:'user-report',component:UserReportComponent},
    ]
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
