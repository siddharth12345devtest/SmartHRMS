import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { AccountingComponent } from './accounting.component';
import { CategoriesComponent } from './categories/categories.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { BudgetExpensesComponent } from './budget-expenses/budget-expenses.component';
import { BudgetRevenuesComponent } from './budget-revenues/budget-revenues.component';
import { SharedModule } from '../../../shared/shared-module';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';
import { AccountingModalComponent } from './accounting-modal/accounting-modal.component';


@NgModule({
  declarations: [
    AccountingComponent,
    CategoriesComponent,
    BudgetsComponent,
    BudgetExpensesComponent,
    BudgetRevenuesComponent,
    AccountingModalComponent
  ],
  imports: [
    CommonModule,
    AccountingRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class AccountingModule { }
