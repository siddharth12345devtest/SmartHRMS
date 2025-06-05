import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormHorizontalRoutingModule } from './form-horizontal-routing.module';
import { FormHorizontalComponent } from './form-horizontal.component';
import { SharedModule } from '../../../../../shared/shared-module';
import { materialModule } from '../../../../../shared/material.module';
import { MatSelect } from '@angular/material/select';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormHorizontalComponent
  ],
  imports: [
    CommonModule,
    FormHorizontalRoutingModule,
    SharedModule,
    materialModule,
    MatSelect,
    FormsModule
  ]
})
export class FormHorizontalModule { }
