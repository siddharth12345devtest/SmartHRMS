import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './jobs.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobsGridComponent } from './jobs-grid/jobs-grid.component';

const routes: Routes = [
  {
    path: '',
    component: JobsComponent,
    children: [
      {
        path: 'jobs-list',
        component: JobsListComponent,
      },
      {
        path: 'jobs-grid',
        component: JobsGridComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsRoutingModule {}
