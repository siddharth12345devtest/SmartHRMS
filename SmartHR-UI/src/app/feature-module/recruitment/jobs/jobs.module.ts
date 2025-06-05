import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobsGridComponent } from './jobs-grid/jobs-grid.component';
import { SharedModule } from '../../../shared/shared-module';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';


@NgModule({
  declarations: [
    JobsComponent,
    JobsListComponent,
    JobsGridComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule,
    CustomPaginationModule

  ]
})
export class JobsModule { }
