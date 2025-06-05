import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminationComponent } from './termination.component';

const routes: Routes = [{ path: '', component: TerminationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerminationRoutingModule { }
