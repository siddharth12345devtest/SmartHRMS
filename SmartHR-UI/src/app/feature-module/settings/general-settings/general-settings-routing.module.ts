import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralSettingsComponent } from './general-settings.component';
import { ConnectedAppsComponent } from './connected-apps/connected-apps.component';
import { NotificationSettingsComponent } from './notification-settings/notification-settings.component';
import { SecuritySettingsComponent } from './security-settings/security-settings.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';

const routes: Routes = [{ path: '', component: GeneralSettingsComponent, children:[
  {path:'connected-apps', component:ConnectedAppsComponent},
  {path:'notification-settings', component:NotificationSettingsComponent},
  {path:'security-settings', component:SecuritySettingsComponent},
  {path:'profile-settings', component:ProfileSettingsComponent},
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralSettingsRoutingModule { }
