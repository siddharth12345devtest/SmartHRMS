import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './sales.component';
import { TaxesComponent } from './taxes/taxes.component';
import { ProvidentFundComponent } from './provident-fund/provident-fund.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { PaymentsComponent } from './payments/payments.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { EstimatesComponent } from './estimates/estimates.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { InvoicesDetailsComponent } from './invoices-details/invoices-details.component';

const routes: Routes = [
  {
    path: '',
    component: SalesComponent,
    children: [
      {
        path: 'taxes',
        component: TaxesComponent,
      },
      {
        path: 'provident-fund',
        component: ProvidentFundComponent,
      },
      {
        path: 'expenses',
        component: ExpensesComponent,
      },
      {
        path: 'payments',
        component: PaymentsComponent,
      },
      {
        path: 'estimates',
        component: EstimatesComponent,
      },
      {
        path: 'invoices',
        component: InvoicesComponent,
      },
      {
        path: 'add-invoice',
        component: AddInvoiceComponent,
      },
      {
        path: 'edit-invoice',
        component: EditInvoiceComponent,
      },
      {
        path: 'invoice-details',
        component: InvoicesDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
