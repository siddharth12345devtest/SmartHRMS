import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';
import { SharedModule } from '../../../shared/shared-module';
import { ChipsModule } from 'primeng/chips';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    CustomPaginationModule,
    ChipsModule
  ]
})
export class PagesModule { }
