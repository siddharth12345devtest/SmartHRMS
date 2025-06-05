import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketGridComponent } from './ticket-grid.component';

const routes: Routes = [{ path: '', component: TicketGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketGridRoutingModule { }
