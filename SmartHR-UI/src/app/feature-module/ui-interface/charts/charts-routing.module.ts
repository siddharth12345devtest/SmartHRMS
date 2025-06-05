import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsComponent } from './charts.component';
[BrowserModule, FormsModule, ReactiveFormsModule, NgApexchartsModule];

const routes: Routes = [
  { path: '', redirectTo: 'apex-charts', pathMatch: 'full' },
  {
    path: '',
    component: ChartsComponent,
    children: [
      {
        path: 'prime-ng',
        loadChildren: () =>
          import('./prime-ng/prime-ng.module').then((m) => m.PrimeNgModule),
      },
      {
        path: 'apex-charts',
        loadChildren: () =>
          import('./chart-apex/chart-apex.module').then(
            (m) => m.ChartApexModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}
