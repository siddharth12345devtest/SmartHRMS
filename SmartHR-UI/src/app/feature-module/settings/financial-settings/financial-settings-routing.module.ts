import { PaymentGatewaysComponent } from './payment-gateways/payment-gateways.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialSettingsComponent } from './financial-settings.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { TaxRatesComponent } from './tax-rates/tax-rates.component';

const routes: Routes = [{ path: '', component: FinancialSettingsComponent, children:[
  {path:'currencies', component:CurrenciesComponent},
  {path:'tax-rates', component:TaxRatesComponent},
  {path:'payment-gateways', component:PaymentGatewaysComponent},
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialSettingsRoutingModule { }
