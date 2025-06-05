import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormPickersRoutingModule } from './form-pickers-routing.module';
import { FormPickersComponent } from './form-pickers.component';
import { CalendarModule } from 'primeng/calendar';
import { SharedModule } from '../../../../shared/shared-module';
import { ColorPickerModule } from 'primeng/colorpicker';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormPickersComponent
  ],
  imports: [
    CommonModule,
    FormPickersRoutingModule,
    CalendarModule,
    ColorPickerModule,
    SharedModule,
    FormsModule
  ]
})
export class FormPickersModule { }
