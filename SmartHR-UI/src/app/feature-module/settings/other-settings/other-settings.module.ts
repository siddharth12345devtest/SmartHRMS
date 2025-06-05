import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherSettingsRoutingModule } from './other-settings-routing.module';
import { OtherSettingsComponent } from './other-settings.component';
import { CustomCssComponent } from './custom-css/custom-css.component';
import { CustomJsComponent } from './custom-js/custom-js.component';
import { CronjobComponent } from './cronjob/cronjob.component';
import { StorageSettingsComponent } from './storage-settings/storage-settings.component';
import { BanIpAddressComponent } from './ban-ip-address/ban-ip-address.component';
import { BackupComponent } from './backup/backup.component';
import { ClearCacheComponent } from './clear-cache/clear-cache.component';
import { CronjobScheduleComponent } from './cronjob-schedule/cronjob-schedule.component';
import { SharedModule } from '../../../shared/shared-module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';


@NgModule({
  declarations: [
    OtherSettingsComponent,
    CustomCssComponent,
    CustomJsComponent,
    CronjobComponent,
    StorageSettingsComponent,
    BanIpAddressComponent,
    BackupComponent,
    ClearCacheComponent,
    CronjobScheduleComponent
  ],
  imports: [
    CommonModule,
    OtherSettingsRoutingModule,
    SharedModule,
    BsDropdownModule.forRoot(),
    TimepickerModule.forRoot(),
  ]
})
export class OtherSettingsModule { }
