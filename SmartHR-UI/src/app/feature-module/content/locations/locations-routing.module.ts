import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from './locations.component';
import { CountriesComponent } from './countries/countries.component';
import { StatesComponent } from './states/states.component';
import { CitiesComponent } from './cities/cities.component';

const routes: Routes = [
  { path: '', 
    component: LocationsComponent,
    children:[
      {path:'countries',component:CountriesComponent},
      {path:'states',component:StatesComponent},
      {path:'cities',component:CitiesComponent},
    ]
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
