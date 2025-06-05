import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeesModalComponent } from './employees-modal/employees-modal.component';
import { SharedModule } from '../../../shared/shared-module';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesModalComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule
  ]
})
export class EmployeesModule { }
