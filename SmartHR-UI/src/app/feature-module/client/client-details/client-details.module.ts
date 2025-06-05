import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientDetailsRoutingModule } from './client-details-routing.module';
import { ClientDetailsComponent } from './client-details.component';
import { SharedModule } from '../../../shared/shared-module';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';


@NgModule({
  declarations: [
    ClientDetailsComponent
  ],
  imports: [
    CommonModule,
    ClientDetailsRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class ClientDetailsModule { }
