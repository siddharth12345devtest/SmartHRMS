import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrmComponent } from './crm.component';
import { ContactsGridComponent } from './contacts-grid/contacts-grid.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompaniesGridComponent } from './companies-grid/companies-grid.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { DealsListComponent } from './deals-list/deals-list.component';
import { DealsGridComponent } from './deals-grid/deals-grid.component';
import { DealsDetailsComponent } from './deals-details/deals-details.component';
import { LeadsDetailsComponent } from './leads-details/leads-details.component';
import { LeadsListComponent } from './leads-list/leads-list.component';
import { LeadsGridComponent } from './leads-grid/leads-grid.component';
import { PipelineComponent } from './pipeline/pipeline.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ActivityComponent } from './activity/activity.component';

const routes: Routes = [
  {
    path: '',
    component: CrmComponent,
    children: [
      { path: 'contact/contacts-grid', component: ContactsGridComponent },
      { path: 'contact/contacts-list', component: ContactsListComponent },
      { path: 'contact/contacts-details', component: ContactsDetailsComponent },
      { path: 'company/companies-list', component: CompaniesComponent },
      { path: 'company/companies-grid', component: CompaniesGridComponent },
      { path: 'company/company-details', component: CompanyDetailsComponent },
      { path: 'deals/deals-list', component: DealsListComponent },
      { path: 'deals/deals-grid', component: DealsGridComponent },
      { path: 'deals/deals-details', component: DealsDetailsComponent },
      { path: 'leads/leads-details', component: LeadsDetailsComponent },
      { path: 'leads/leads-list', component: LeadsListComponent },
      { path: 'leads/leads-grid', component: LeadsGridComponent },
      { path: 'pipeline', component: PipelineComponent },
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'activity', component: ActivityComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrmRoutingModule {}
