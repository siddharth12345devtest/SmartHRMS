import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormVerticalRoutingModule } from './form-vertical-routing.module';
import { FormVerticalComponent } from './form-vertical.component';
import { SharedModule } from '../../../../../shared/shared-module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormVerticalComponent
  ],
  imports: [
    CommonModule,
    FormVerticalRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class FormVerticalModule { }
