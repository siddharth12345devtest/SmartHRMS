import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { SharedModule } from '../../../shared/shared-module';
import { TaskTabContentComponent } from './task-tab-content/task-tab-content.component';


@NgModule({
  declarations: [
    TasksComponent,
    TaskTabContentComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule
  ]
})
export class TasksModule { }
