import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSettingsComponent } from './app-settings.component';
import { CustomFieldsComponent } from './custom-fields/custom-fields.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';
import { InvoiceSettingsComponent } from './invoice-settings/invoice-settings.component';
import { ApprovalSettingsComponent } from './approval-settings/approval-settings.component';
import { SalarySettingsComponent } from './salary-settings/salary-settings.component';

const routes: Routes = [{ path: '', component: AppSettingsComponent, children:[
  { path: 'custom-fields', component: CustomFieldsComponent },
  { path: 'leave-type', component: LeaveTypeComponent },
  { path: 'invoice-settings', component: InvoiceSettingsComponent },
  { path: 'approval-settings', component: ApprovalSettingsComponent },
  { path: 'salary-settings', component: SalarySettingsComponent },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSettingsRoutingModule { }
