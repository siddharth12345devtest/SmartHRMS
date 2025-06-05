import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignationsRoutingModule } from './designations-routing.module';
import { DesignationsComponent } from './designations.component';

import { CustomPaginationModule } from '../../../../shared/custom-pagination/custom-pagination.module';
import { SharedModule } from '../../../../shared/shared-module';


@NgModule({
  declarations: [
    DesignationsComponent
  ],
  imports: [
    CommonModule,
    DesignationsRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class DesignationsModule { }
