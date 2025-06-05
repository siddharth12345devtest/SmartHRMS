import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support.component';
import { SharedModule } from '../../../shared/shared-module';
import { KnowledgebaseComponent } from './knowledgebase/knowledgebase.component';
import { KnowledgebaseViewComponent } from './knowledgebase-view/knowledgebase-view.component';
import { KnowledgebaseDetailsComponent } from './knowledgebase-details/knowledgebase-details.component';


@NgModule({
  declarations: [
    SupportComponent,
    KnowledgebaseComponent,
    KnowledgebaseViewComponent,
    KnowledgebaseDetailsComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule,
    SharedModule
  ]
})
export class SupportModule { }
