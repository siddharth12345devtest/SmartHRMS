import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherSettingsComponent } from './other-settings.component';
import { ClearCacheComponent } from './clear-cache/clear-cache.component';
import { BackupComponent } from './backup/backup.component';
import { BanIpAddressComponent } from './ban-ip-address/ban-ip-address.component';
import { StorageSettingsComponent } from './storage-settings/storage-settings.component';
import { CronjobComponent } from './cronjob/cronjob.component';
import { CustomJsComponent } from './custom-js/custom-js.component';
import { CustomCssComponent } from './custom-css/custom-css.component';
import { CronjobScheduleComponent } from './cronjob-schedule/cronjob-schedule.component';

const routes: Routes = [{ path: '', component: OtherSettingsComponent, children:[
  {path:'clear-cache', component:ClearCacheComponent},
  {path:'backup', component:BackupComponent},
  {path:'ban-ip-address', component:BanIpAddressComponent},
  {path:'storage-settings', component:StorageSettingsComponent},
  {path:'cronjob', component:CronjobComponent},
  {path:'cronjob-schedule', component:CronjobScheduleComponent},
  {path:'custom-js', component:CustomJsComponent},
  {path:'custom-css', component:CustomCssComponent},
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherSettingsRoutingModule { }
