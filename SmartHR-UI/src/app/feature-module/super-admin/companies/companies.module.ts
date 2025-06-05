import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './companies.component';
import { SharedModule } from '../../../shared/shared-module';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';


@NgModule({
  declarations: [
    CompaniesComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    CustomPaginationModule,
    SharedModule
  ]
})
export class CompaniesModule { }
