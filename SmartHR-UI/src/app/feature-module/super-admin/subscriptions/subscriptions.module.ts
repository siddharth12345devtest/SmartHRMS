import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { SubscriptionsComponent } from './subscriptions.component';
import { SharedModule } from '../../../shared/shared-module';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';


@NgModule({
  declarations: [
    SubscriptionsComponent
  ],
  imports: [
    CommonModule,
    SubscriptionsRoutingModule,
    CustomPaginationModule,
    SharedModule
  ]
})
export class SubscriptionsModule { }
