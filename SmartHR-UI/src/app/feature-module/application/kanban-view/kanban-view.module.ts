import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanViewRoutingModule } from './kanban-view-routing.module';
import { KanbanViewComponent } from './kanban-view.component';
import { SharedModule } from '../../../shared/shared-module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { KanbanAllComponent } from './kanban-all/kanban-all.component';
import { KanbanHighComponent } from './kanban-high/kanban-high.component';
import { KanbanLowComponent } from './kanban-low/kanban-low.component';
import { KanbanMediumComponent } from './kanban-medium/kanban-medium.component';


@NgModule({
  declarations: [
    KanbanViewComponent,
    KanbanAllComponent,
    KanbanHighComponent,
    KanbanLowComponent,
    KanbanMediumComponent
  ],
  imports: [
    CommonModule,
    KanbanViewRoutingModule,
    SharedModule,
    DragDropModule
  ]
})
export class KanbanViewModule { }
