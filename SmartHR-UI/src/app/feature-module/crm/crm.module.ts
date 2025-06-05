import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmRoutingModule } from './crm-routing.module';
import { CrmComponent } from './crm.component';
import { SharedModule } from '../../shared/shared-module';
import { ChipsModule } from 'primeng/chips';
import { ContactsGridComponent } from './contacts-grid/contacts-grid.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { CustomPaginationModule } from '../../shared/custom-pagination/custom-pagination.module';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';
import { ContactsDetailsModalComponent } from './contacts-details-modal/contacts-details-modal.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompaniesGridComponent } from './companies-grid/companies-grid.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyModalComponent } from './company-modal/company-modal.component';
import { DealsListComponent } from './deals-list/deals-list.component';
import { DealsGridComponent } from './deals-grid/deals-grid.component';
import { DealsDetailsComponent } from './deals-details/deals-details.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LeadsDetailsComponent } from './leads-details/leads-details.component';
import { LeadsListComponent } from './leads-list/leads-list.component';
import { LeadsGridComponent } from './leads-grid/leads-grid.component';
import { LeadsModalComponent } from './leads-modal/leads-modal.component';
import { PipelineComponent } from './pipeline/pipeline.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ActivityComponent } from './activity/activity.component';
import { MatChipsModule } from '@angular/material/chips';
import { materialModule } from '../../shared/material.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';


@NgModule({
  declarations: [
    CrmComponent,
    ContactsGridComponent,
    ContactModalComponent,
    ContactsListComponent,
    ContactsDetailsComponent,
    ContactsDetailsModalComponent,
    CompaniesComponent,
    CompaniesGridComponent,
    CompanyDetailsComponent,
    CompanyModalComponent,
    DealsListComponent,
    DealsGridComponent,
    DealsDetailsComponent,
    LeadsDetailsComponent,
    LeadsListComponent,
    LeadsGridComponent,
    LeadsModalComponent,
    PipelineComponent,
    AnalyticsComponent,
    ActivityComponent
  ],
  imports: [
    CommonModule,
    CrmRoutingModule,
    SharedModule,
    ChipsModule,
    CustomPaginationModule,DragDropModule,
    MatChipsModule,
    materialModule,
    BsDropdownModule.forRoot(),
    TimepickerModule.forRoot(),
  ]
})
export class CrmModule { }
