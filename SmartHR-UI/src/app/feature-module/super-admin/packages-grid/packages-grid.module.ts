import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesGridRoutingModule } from './packages-grid-routing.module';
import { PackagesGridComponent } from './packages-grid.component';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';
import { SharedModule } from '../../../shared/shared-module';


@NgModule({
  declarations: [
    PackagesGridComponent
  ],
  imports: [
    CommonModule,
    PackagesGridRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class PackagesGridModule { }
