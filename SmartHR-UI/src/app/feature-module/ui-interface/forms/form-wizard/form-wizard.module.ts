import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormWizardRoutingModule } from './form-wizard-routing.module';
import { FormWizardComponent } from './form-wizard.component';
import { StepperModule } from 'primeng/stepper';
import { SharedModule } from '../../../../shared/shared-module';

@NgModule({
  declarations: [
    FormWizardComponent
  ],
  imports: [
    CommonModule,
    FormWizardRoutingModule,
    StepperModule,
    SharedModule
  ]
})
export class FormWizardModule { }
