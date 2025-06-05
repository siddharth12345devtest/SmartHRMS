import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiScrollbarRoutingModule } from './ui-scrollbar-routing.module';
import { UiScrollbarComponent } from './ui-scrollbar.component';
import { SharedModule } from '../../../../shared/shared-module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { materialModule } from '../../../../shared/material.module';




@NgModule({
  declarations: [
    UiScrollbarComponent
  ],
  imports: [
    CommonModule,
    UiScrollbarRoutingModule,
    SharedModule,
    NgScrollbarModule,
    materialModule
  ]
})
export class UiScrollbarModule { }
