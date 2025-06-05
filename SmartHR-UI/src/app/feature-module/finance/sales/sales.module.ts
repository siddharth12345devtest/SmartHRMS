import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { EstimatesComponent } from './estimates/estimates.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { PaymentsComponent } from './payments/payments.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ProvidentFundComponent } from './provident-fund/provident-fund.component';
import { TaxesComponent } from './taxes/taxes.component';
import { InvoicesDetailsComponent } from './invoices-details/invoices-details.component';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';
import { SharedModule } from '../../../shared/shared-module';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';


@NgModule({
  declarations: [
    SalesComponent,
    EstimatesComponent,
    InvoicesComponent,
    PaymentsComponent,
    ExpensesComponent,
    ProvidentFundComponent,
    TaxesComponent,
    InvoicesDetailsComponent,
    AddInvoiceComponent,
    EditInvoiceComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    CustomPaginationModule,
    SharedModule
  ]
})
export class SalesModule { }
