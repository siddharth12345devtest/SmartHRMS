import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefferalsComponent } from './refferals.component';

const routes: Routes = [{ path: '', component: RefferalsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefferalsRoutingModule { }
