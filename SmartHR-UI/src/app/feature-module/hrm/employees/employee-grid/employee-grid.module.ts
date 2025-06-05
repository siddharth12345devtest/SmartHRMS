import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeGridRoutingModule } from './employee-grid-routing.module';
import { EmployeeGridComponent } from './employee-grid.component';
import { SharedModule } from '../../../../shared/shared-module';
import { CustomPaginationModule } from '../../../../shared/custom-pagination/custom-pagination.module';


@NgModule({
  declarations: [
    EmployeeGridComponent
  ],
  imports: [
    CommonModule,
    EmployeeGridRoutingModule,
    SharedModule,
  ]
})
export class EmployeeGridModule { }
