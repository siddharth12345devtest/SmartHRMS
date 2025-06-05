import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskDetailsRoutingModule } from './task-details-routing.module';
import { TaskDetailsComponent } from './task-details.component';
import { SharedModule } from '../../../shared/shared-module';


@NgModule({
  declarations: [
    TaskDetailsComponent
  ],
  imports: [
    CommonModule,
    TaskDetailsRoutingModule,
    SharedModule
  ]
})
export class TaskDetailsModule { }
