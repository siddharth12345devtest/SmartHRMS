import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseUiRoutingModule } from './base-ui-routing.module';
import { BaseUiComponent } from './base-ui.component';
import { SharedModule } from '../../../shared/shared-module';


@NgModule({
  declarations: [
    BaseUiComponent
  ],
  imports: [
    CommonModule,
    BaseUiRoutingModule,
    SharedModule
  ]
})
export class BaseUiModule { }
