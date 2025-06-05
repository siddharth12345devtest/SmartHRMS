import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeListRoutingModule } from './employee-list-routing.module';
import { EmployeeListComponent } from './employee-list.component';
import { SharedModule } from '../../../../shared/shared-module';
import { CustomPaginationModule } from '../../../../shared/custom-pagination/custom-pagination.module';


@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeeListRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class EmployeeListModule { }
