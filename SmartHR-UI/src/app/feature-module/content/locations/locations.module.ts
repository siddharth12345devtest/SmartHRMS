import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { CountriesComponent } from './countries/countries.component';
import { CitiesComponent } from './cities/cities.component';
import { StatesComponent } from './states/states.component';
import { SharedModule } from '../../../shared/shared-module';
import { CustomPaginationComponent } from '../../../shared/custom-pagination/custom-pagination.component';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';
import { LocationModalComponent } from './location-modal/location-modal.component';


@NgModule({
  declarations: [
    LocationsComponent,
    CountriesComponent,
    CitiesComponent,
    StatesComponent,
    LocationModalComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class LocationsModule { }
