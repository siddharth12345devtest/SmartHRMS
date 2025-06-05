import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'client-list',
        loadChildren: () =>
          import('./client-list/client-list.module').then(
            (m) => m.ClientListModule
          ),
      },
      {
        path: 'client-grid',
        loadChildren: () =>
          import('./client-grid/client-grid.module').then(
            (m) => m.ClientGridModule
          ),
      },
      {
        path: 'client-details',
        loadChildren: () =>
          import('./client-details/client-details.module').then(
            (m) => m.ClientDetailsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
