import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemSettingsRoutingModule } from './system-settings-routing.module';
import { SystemSettingsComponent } from './system-settings.component';
import { EmailSettingsComponent } from './email-settings/email-settings.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { SmsSettingsComponent } from './sms-settings/sms-settings.component';
import { SmsTemplateComponent } from './sms-template/sms-template.component';
import { OtpSettingsComponent } from './otp-settings/otp-settings.component';
import { GdprComponent } from './gdpr/gdpr.component';
import { MaintenanceModeComponent } from './maintenance-mode/maintenance-mode.component';
import { SharedModule } from '../../../shared/shared-module';


@NgModule({
  declarations: [
    SystemSettingsComponent,
    EmailSettingsComponent,
    EmailTemplateComponent,
    SmsSettingsComponent,
    SmsTemplateComponent,
    OtpSettingsComponent,
    GdprComponent,
    MaintenanceModeComponent
  ],
  imports: [
    CommonModule,
    SystemSettingsRoutingModule,
    SharedModule
  ]
})
export class SystemSettingsModule { }
