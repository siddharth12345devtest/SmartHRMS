import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectGridComponent } from './project-grid.component';

const routes: Routes = [{ path: '', component: ProjectGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectGridRoutingModule { }
