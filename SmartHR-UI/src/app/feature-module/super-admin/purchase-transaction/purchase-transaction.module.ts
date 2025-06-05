import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseTransactionRoutingModule } from './purchase-transaction-routing.module';
import { PurchaseTransactionComponent } from './purchase-transaction.component';
import { SharedModule } from '../../../shared/shared-module';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';


@NgModule({
  declarations: [
    PurchaseTransactionComponent
  ],
  imports: [
    CommonModule,
    PurchaseTransactionRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class PurchaseTransactionModule { }
