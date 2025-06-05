import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { SharedModule } from '../../../shared/shared-module';
import { ChipsModule } from 'primeng/chips';


@NgModule({
  declarations: [
    TicketsComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    SharedModule,
    ChipsModule
  ]
})
export class TicketsModule { }
