import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidaysRoutingModule } from './holidays-routing.module';
import { HolidaysComponent } from './holidays.component';
import { SharedModule } from '../../../shared/shared-module';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';


@NgModule({
  declarations: [
    HolidaysComponent
  ],
  imports: [
    CommonModule,
    HolidaysRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class HolidaysModule { }
