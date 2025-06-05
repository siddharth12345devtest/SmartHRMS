import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientListRoutingModule } from './client-list-routing.module';
import { ClientListComponent } from './client-list.component';
import { SharedModule } from '../../../shared/shared-module';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';


@NgModule({
  declarations: [
    ClientListComponent
  ],
  imports: [
    CommonModule,
    ClientListRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class ClientListModule { }
