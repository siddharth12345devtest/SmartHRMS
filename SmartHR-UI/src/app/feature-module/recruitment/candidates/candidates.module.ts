import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidatesComponent } from './candidates.component';
import { CandidatesGridComponent } from './candidates-grid/candidates-grid.component';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { CandidatesKanbanComponent } from './candidates-kanban/candidates-kanban.component';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';
import { SharedModule } from '../../../shared/shared-module';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    CandidatesComponent,
    CandidatesGridComponent,
    CandidatesListComponent,
    CandidatesKanbanComponent
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    SharedModule,
    CustomPaginationModule,
    DragDropModule
  ]
})
export class CandidatesModule { }
