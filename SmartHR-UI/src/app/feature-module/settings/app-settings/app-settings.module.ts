import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSettingsRoutingModule } from './app-settings-routing.module';
import { AppSettingsComponent } from './app-settings.component';
import { ApprovalSettingsComponent } from './approval-settings/approval-settings.component';
import { InvoiceSettingsComponent } from './invoice-settings/invoice-settings.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';
import { CustomFieldsComponent } from './custom-fields/custom-fields.component';
import { SalarySettingsComponent } from './salary-settings/salary-settings.component';
import { SharedModule } from '../../../shared/shared-module';


@NgModule({
  declarations: [
    AppSettingsComponent,
    SalarySettingsComponent,
    ApprovalSettingsComponent,
    InvoiceSettingsComponent,
    LeaveTypeComponent,
    CustomFieldsComponent
  ],
  imports: [
    CommonModule,
    AppSettingsRoutingModule,
    SharedModule
  ]
})
export class AppSettingsModule { }
