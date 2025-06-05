import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayrollComponent } from './payroll.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { PayslipComponent } from './payslip/payslip.component';
import { PayrollItemsComponent } from './payroll-items/payroll-items.component';
import { PayrollOvertimeComponent } from './payroll-overtime/payroll-overtime.component';
import { PayrollDeductionComponent } from './payroll-deduction/payroll-deduction.component';

const routes: Routes = [
  { path: '', 
    component: PayrollComponent,
    children:[
      {path:'employee-salary',component:EmployeeSalaryComponent},
      {path:'payslip',component:PayslipComponent},
      {path:'payroll-items',component:PayrollItemsComponent},
      {path:'payroll-overtime',component:PayrollOvertimeComponent},
      {path:'payroll-deduction',component:PayrollDeductionComponent},
    ]
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }
