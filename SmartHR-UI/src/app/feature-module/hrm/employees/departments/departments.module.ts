import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { SharedModule } from '../../../../shared/shared-module';
import { CustomPaginationModule } from '../../../../shared/custom-pagination/custom-pagination.module';


@NgModule({
  declarations: [
    DepartmentsComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class DepartmentsModule { }
