import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: 'project-list',
        loadChildren: () =>
          import('./project-list/project-list.module').then(
            (m) => m.ProjectListModule
          ),
      },
      {
        path: 'project-grid',
        loadChildren: () =>
          import('./project-grid/project-grid.module').then(
            (m) => m.ProjectGridModule
          ),
      },
      {
        path: 'project-details',
        loadChildren: () =>
          import('./project-details/project-details.module').then(
            (m) => m.ProjectDetailsModule
          ),
      },
      {
        path: 'task-details',
        loadChildren: () =>
          import('./task-details/task-details.module').then(
            (m) => m.TaskDetailsModule
          ),
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('./tasks/tasks.module').then((m) => m.TasksModule),
      },
      {
        path: 'task-board',
        loadChildren: () =>
          import('./task-board/task-board.module').then(
            (m) => m.TaskBoardModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
