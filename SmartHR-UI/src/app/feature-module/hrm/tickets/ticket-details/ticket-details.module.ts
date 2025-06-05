import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketDetailsRoutingModule } from './ticket-details-routing.module';
import { TicketDetailsComponent } from './ticket-details.component';
import { SharedModule } from '../../../../shared/shared-module';


@NgModule({
  declarations: [
    TicketDetailsComponent
  ],
  imports: [
    CommonModule,
    TicketDetailsRoutingModule,
    SharedModule
  ]
})
export class TicketDetailsModule { }
