import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagesGridComponent } from './packages-grid.component';

const routes: Routes = [{ path: '', component: PackagesGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackagesGridRoutingModule { }
