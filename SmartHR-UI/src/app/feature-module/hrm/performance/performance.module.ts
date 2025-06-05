import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRoutingModule } from './performance-routing.module';
import { PerformanceComponent } from './performance.component';
import { PerformanceIndicatorComponent } from './performance-indicator/performance-indicator.component';
import { PerformanceReviewComponent } from './performance-review/performance-review.component';
import { PerformanceAppraisalComponent } from './performance-appraisal/performance-appraisal.component';
import { GoalTrackingComponent } from './goal-tracking/goal-tracking.component';
import { GoalTypeComponent } from './goal-type/goal-type.component';
import { SharedModule } from '../../../shared/shared-module';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';
import { PerfomanceModalComponent } from './perfomance-modal/perfomance-modal.component';


@NgModule({
  declarations: [
    PerformanceComponent,
    PerformanceIndicatorComponent,
    PerformanceReviewComponent,
    PerformanceAppraisalComponent,
    GoalTrackingComponent,
    GoalTypeComponent,
    PerfomanceModalComponent
  ],
  imports: [
    CommonModule,
    PerformanceRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class PerformanceModule { }
