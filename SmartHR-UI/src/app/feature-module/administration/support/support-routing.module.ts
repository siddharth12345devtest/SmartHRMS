import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportComponent } from './support.component';
import { KnowledgebaseComponent } from './knowledgebase/knowledgebase.component';
import { KnowledgebaseViewComponent } from './knowledgebase-view/knowledgebase-view.component';
import { KnowledgebaseDetailsComponent } from './knowledgebase-details/knowledgebase-details.component';

const routes: Routes = [{ path: '', component: SupportComponent, children:[
  {
    path: 'knowledgebase',
    component: KnowledgebaseComponent,
  },
  {
    path: 'knowledgebase-view',
    component: KnowledgebaseViewComponent,
  },
  {
    path: 'knowledgebase-details',
    component: KnowledgebaseDetailsComponent,
  },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }
