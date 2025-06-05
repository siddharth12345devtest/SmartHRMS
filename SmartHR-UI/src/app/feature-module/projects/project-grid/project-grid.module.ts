import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectGridRoutingModule } from './project-grid-routing.module';
import { ProjectGridComponent } from './project-grid.component';
import { SharedModule } from '../../../shared/shared-module';


@NgModule({
  declarations: [
    ProjectGridComponent
  ],
  imports: [
    CommonModule,
    ProjectGridRoutingModule,
    SharedModule
  ]
})
export class ProjectGridModule { }
