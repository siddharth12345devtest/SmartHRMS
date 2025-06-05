import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesRoutingModule } from './data-tables-routing.module';
import { DataTablesComponent } from './data-tables.component';
import { SharedModule } from '../../../../shared/shared-module';
import { CustomPaginationModule } from '../../../../shared/custom-pagination/custom-pagination.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DataTablesComponent
  ],
  imports: [
    CommonModule,
    DataTablesRoutingModule,
    SharedModule,
    CustomPaginationModule,
    FormsModule
  ]
})
export class DataTablesModule { }
