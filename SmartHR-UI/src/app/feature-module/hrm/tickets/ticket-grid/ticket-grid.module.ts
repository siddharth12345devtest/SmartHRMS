import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketGridRoutingModule } from './ticket-grid-routing.module';
import { TicketGridComponent } from './ticket-grid.component';
import { SharedModule } from '../../../../shared/shared-module';



@NgModule({
  declarations: [
    TicketGridComponent
  ],
  imports: [
    CommonModule,
    TicketGridRoutingModule,
    SharedModule
  ]
})
export class TicketGridModule { }
