import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiTextEditorRoutingModule } from './ui-text-editor-routing.module';
import { UiTextEditorComponent } from './ui-text-editor.component';
import { SharedModule } from '../../../../shared/shared-module';




@NgModule({
  declarations: [
    UiTextEditorComponent
  ],
  imports: [
    CommonModule,
    UiTextEditorRoutingModule,
    SharedModule
  ]
})
export class UiTextEditorModule { }
