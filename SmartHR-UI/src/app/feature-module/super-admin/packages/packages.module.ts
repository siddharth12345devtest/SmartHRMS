import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesComponent } from './packages.component';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';
import { SharedModule } from '../../../shared/shared-module';


@NgModule({
  declarations: [
    PackagesComponent
  ],
  imports: [
    CommonModule,
    PackagesRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class PackagesModule { }
