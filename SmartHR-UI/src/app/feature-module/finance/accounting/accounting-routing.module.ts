import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountingComponent } from './accounting.component';
import { CategoriesComponent } from './categories/categories.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { BudgetExpensesComponent } from './budget-expenses/budget-expenses.component';
import { BudgetRevenuesComponent } from './budget-revenues/budget-revenues.component';

const routes: Routes = [
  { path: '', 
    component: AccountingComponent,
    children:[
      {path:'categories',component:CategoriesComponent},
      {path:'budgets',component:BudgetsComponent},
      {path:'budget-expenses',component:BudgetExpensesComponent},
      {path:'budget-revenues',component:BudgetRevenuesComponent},
    ]
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
