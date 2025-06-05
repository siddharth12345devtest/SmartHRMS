import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './tickets.component';

const routes: Routes = [
  { path: '',
     component: TicketsComponent,
     children:[
      { path: 'ticket-list', loadChildren: () => import('./ticket/ticket.module').then(m => m.TicketModule) },
      { path: 'ticket-grid', loadChildren: () => import('./ticket-grid/ticket-grid.module').then(m => m.TicketGridModule) }, 
      { path: 'ticket-details', loadChildren: () => import('./ticket-details/ticket-details.module').then(m => m.TicketDetailsModule) },
     ] 
    },

  
    
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
