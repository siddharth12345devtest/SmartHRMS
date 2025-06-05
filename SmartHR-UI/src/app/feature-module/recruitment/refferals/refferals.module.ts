import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefferalsRoutingModule } from './refferals-routing.module';
import { RefferalsComponent } from './refferals.component';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';
import { SharedModule } from '../../../shared/shared-module';


@NgModule({
  declarations: [
    RefferalsComponent
  ],
  imports: [
    CommonModule,
    RefferalsRoutingModule,
    CustomPaginationModule,
    SharedModule
  ]
})
export class RefferalsModule { }
