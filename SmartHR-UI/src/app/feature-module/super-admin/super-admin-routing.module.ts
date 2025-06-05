import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminComponent } from './super-admin.component';

const routes: Routes = [
  {
    path: '',
    component: SuperAdminComponent,
    children: [
      {
        path: 'super-admin-dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'companies',
        loadChildren: () =>
          import('./companies/companies.module').then((m) => m.CompaniesModule),
      },
      {
        path: 'subscriptions',
        loadChildren: () =>
          import('./subscriptions/subscriptions.module').then(
            (m) => m.SubscriptionsModule
          ),
      },
      {
        path: 'packages',
        loadChildren: () =>
          import('./packages/packages.module').then((m) => m.PackagesModule),
      },
      {
        path: 'packages-grid',
        loadChildren: () =>
          import('./packages-grid/packages-grid.module').then(
            (m) => m.PackagesGridModule
          ),
      },
      {
        path: 'purchase-transaction',
        loadChildren: () =>
          import('./purchase-transaction/purchase-transaction.module').then(
            (m) => m.PurchaseTransactionModule
          ),
      },
      {
        path: 'domain',
        loadChildren: () =>
          import('./domain/domain.module').then((m) => m.DomainModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperAdminRoutingModule {}
