import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerminationRoutingModule } from './termination-routing.module';
import { TerminationComponent } from './termination.component';
import { SharedModule } from '../../../shared/shared-module';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';


@NgModule({
  declarations: [
    TerminationComponent
  ],
  imports: [
    CommonModule,
    TerminationRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class TerminationModule { }
