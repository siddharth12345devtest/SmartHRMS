import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResignationRoutingModule } from './resignation-routing.module';
import { ResignationComponent } from './resignation.component';
import { SharedModule } from '../../../shared/shared-module';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';


@NgModule({
  declarations: [
    ResignationComponent
  ],
  imports: [
    CommonModule,
    ResignationRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class ResignationModule { }
