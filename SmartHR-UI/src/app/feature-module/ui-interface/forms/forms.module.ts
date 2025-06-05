import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormBasicInputsComponent } from './form-elements/form-basic-inputs/form-basic-inputs.component';
import { FormCheckboxRadiosComponent } from './form-elements/form-checkbox-radios/form-checkbox-radios.component';
import { FormElementsComponent } from './form-elements/form-elements/form-elements.component';
import { FormFileuploadComponent } from './form-elements/form-fileupload/form-fileupload.component';
import { FormGridGuttersComponent } from './form-elements/form-grid-gutters/form-grid-gutters.component';
import { FormInputGroupsComponent } from './form-elements/form-input-groups/form-input-groups.component';

import { FormSelectComponent } from './form-elements/form-select/form-select.component';


  import { FormFloatingLabelsComponent } from './layouts/form-floating-labels/form-floating-labels.component';


import { FormMaskComponent } from './form-elements/form-mask/form-mask.component';
import { SharedModule } from '../../../shared/shared-module';
import { materialModule } from '../../../shared/material.module';
import { ColorPickerModule } from 'primeng/colorpicker';


@NgModule({
  declarations: [
    FormsComponent,
    FormBasicInputsComponent,
    FormCheckboxRadiosComponent,
    FormElementsComponent,
    FormFileuploadComponent,
    FormGridGuttersComponent,
    FormInputGroupsComponent,
    FormSelectComponent,
    FormFloatingLabelsComponent,
    FormMaskComponent

  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule,
    materialModule,
    ColorPickerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormsModule { }
