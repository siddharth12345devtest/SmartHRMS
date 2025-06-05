import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollRoutingModule } from './payroll-routing.module';
import { PayrollComponent } from './payroll.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { PayslipComponent } from './payslip/payslip.component';
import { PayrollItemsComponent } from './payroll-items/payroll-items.component';
import { SharedModule } from '../../../shared/shared-module';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';
import { PayrollOvertimeComponent } from './payroll-overtime/payroll-overtime.component';
import { PayrollDeductionComponent } from './payroll-deduction/payroll-deduction.component';
import { PayrollModalComponent } from './payroll-modal/payroll-modal.component';


@NgModule({
  declarations: [
    PayrollComponent,
    EmployeeSalaryComponent,
    PayslipComponent,
    PayrollItemsComponent,
    PayrollOvertimeComponent,
    PayrollDeductionComponent,
    PayrollModalComponent
  ],
  imports: [
    CommonModule,
    PayrollRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class PayrollModule { }
