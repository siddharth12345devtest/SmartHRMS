import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerformanceComponent } from './performance.component';
import { GoalTypeComponent } from './goal-type/goal-type.component';
import { PerformanceIndicatorComponent } from './performance-indicator/performance-indicator.component';
import { PerformanceAppraisalComponent } from './performance-appraisal/performance-appraisal.component';
import { PerformanceReviewComponent } from './performance-review/performance-review.component';
import { GoalTrackingComponent } from './goal-tracking/goal-tracking.component';

const routes: Routes = [
  { path: '', 
    component: PerformanceComponent,
    children:[
      {path:'performance-indicator',component:PerformanceIndicatorComponent},
      {path:'performance-appraisal',component:PerformanceAppraisalComponent},
      {path:'performance-review',component:PerformanceReviewComponent},
      {path:'goal-tracking',component:GoalTrackingComponent},
      {path:'goal-type',component:GoalTypeComponent},
    ]
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceRoutingModule { }
