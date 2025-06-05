import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from '../../shared/shared-module';
import { TaskModalComponent } from './task-board/task-modal/task-modal.component';
import { ChipsModule } from 'primeng/chips';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    ProjectsComponent,
    TaskModalComponent,
    ProjectModalComponent

  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    ChipsModule,
    TimepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
  ]
})
export class ProjectsModule { }
