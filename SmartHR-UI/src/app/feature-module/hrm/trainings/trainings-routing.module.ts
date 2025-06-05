import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './trainings.component';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainersComponent } from './trainers/trainers.component';
import { TrainingTypeComponent } from './training-type/training-type.component';

const routes: Routes = [
  { path: '', 
    component: TrainingsComponent,
    children:[
      {path:'training-list', component:TrainingListComponent},
      {path:'trainers', component:TrainersComponent},
      {path:'training-type', component:TrainingTypeComponent},
    ]
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingsRoutingModule { }
