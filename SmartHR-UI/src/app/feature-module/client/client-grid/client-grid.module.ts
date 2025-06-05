import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientGridRoutingModule } from './client-grid-routing.module';
import { ClientGridComponent } from './client-grid.component';
import { SharedModule } from '../../../shared/shared-module';


@NgModule({
  declarations: [
    ClientGridComponent
  ],
  imports: [
    CommonModule,
    ClientGridRoutingModule,
    SharedModule
  ]
})
export class ClientGridModule { }
