import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralSettingsRoutingModule } from './general-settings-routing.module';
import { GeneralSettingsComponent } from './general-settings.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { SecuritySettingsComponent } from './security-settings/security-settings.component';
import { NotificationSettingsComponent } from './notification-settings/notification-settings.component';
import { ConnectedAppsComponent } from './connected-apps/connected-apps.component';
import { SharedModule } from '../../../shared/shared-module';


@NgModule({
  declarations: [
    GeneralSettingsComponent,
    ProfileSettingsComponent,
    SecuritySettingsComponent,
    NotificationSettingsComponent,
    ConnectedAppsComponent,
  ],
  imports: [
    CommonModule,
    GeneralSettingsRoutingModule,
    SharedModule
  ]
})
export class GeneralSettingsModule { }
