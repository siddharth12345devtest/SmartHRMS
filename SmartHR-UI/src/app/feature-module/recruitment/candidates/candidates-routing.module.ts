import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesComponent } from './candidates.component';
import { CandidatesGridComponent } from './candidates-grid/candidates-grid.component';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { CandidatesKanbanComponent } from './candidates-kanban/candidates-kanban.component';

const routes: Routes = [
  {
    path: '',
    component: CandidatesComponent,
    children: [
      {
        path: 'candidates-grid',
        component: CandidatesGridComponent,
      },
      {
        path: 'candidates-list',
        component: CandidatesListComponent,
      },
      {
        path: 'candidates-kanban',
        component: CandidatesKanbanComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidatesRoutingModule {}
