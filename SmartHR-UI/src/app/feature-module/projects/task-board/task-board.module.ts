import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskBoardRoutingModule } from './task-board-routing.module';
import { TaskBoardComponent } from './task-board.component';
import { SharedModule } from '../../../shared/shared-module';
import { materialModule } from '../../../shared/material.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AllTaskComponent } from './all-task/all-task.component';
import { HighTaskComponent } from './high-task/high-task.component';
import { LowTaskComponent } from './low-task/low-task.component';
import { MediumTaskComponent } from './medium-task/medium-task.component';
import { ChipsModule } from 'primeng/chips';


@NgModule({
  declarations: [
    TaskBoardComponent,
    AllTaskComponent,
    HighTaskComponent,
    LowTaskComponent,
    MediumTaskComponent,
  ],
  imports: [
    CommonModule,
    TaskBoardRoutingModule,
    SharedModule,
    materialModule,
    DragDropModule,
    ChipsModule
  ]
})
export class TaskBoardModule { }
