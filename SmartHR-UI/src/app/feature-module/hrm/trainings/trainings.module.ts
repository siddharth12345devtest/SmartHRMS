import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingsRoutingModule } from './trainings-routing.module';
import { TrainingsComponent } from './trainings.component';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainersComponent } from './trainers/trainers.component';
import { TrainingTypeComponent } from './training-type/training-type.component';
import { SharedModule } from '../../../shared/shared-module';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';
import { TrainingModalComponent } from './training-modal/training-modal.component';


@NgModule({
  declarations: [
    TrainingsComponent,
    TrainingListComponent,
    TrainersComponent,
    TrainingTypeComponent,
    TrainingModalComponent
  ],
  imports: [
    CommonModule,
    TrainingsRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class TrainingsModule { }
