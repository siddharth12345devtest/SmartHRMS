import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemSettingsComponent } from './system-settings.component';
import { MaintenanceModeComponent } from './maintenance-mode/maintenance-mode.component';
import { GdprComponent } from './gdpr/gdpr.component';
import { OtpSettingsComponent } from './otp-settings/otp-settings.component';
import { SmsTemplateComponent } from './sms-template/sms-template.component';
import { SmsSettingsComponent } from './sms-settings/sms-settings.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { EmailSettingsComponent } from './email-settings/email-settings.component';

const routes: Routes = [{ path: '', component: SystemSettingsComponent, children:[
  {path:'maintenance-mode', component:MaintenanceModeComponent},
  {path:'gdpr', component:GdprComponent},
  {path:'otp-settings', component:OtpSettingsComponent},
  {path:'sms-template', component:SmsTemplateComponent},
  {path:'sms-settings', component:SmsSettingsComponent},
  {path:'email-template', component:EmailTemplateComponent},
  {path:'email-settings', component:EmailSettingsComponent},
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemSettingsRoutingModule { }
