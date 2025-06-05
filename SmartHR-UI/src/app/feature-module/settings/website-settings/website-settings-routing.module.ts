import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteSettingsComponent } from './website-settings.component';
import { AiSettingsComponent } from './ai-settings/ai-settings.component';
import { AuthenticationSettingsComponent } from './authentication-settings/authentication-settings.component';
import { AddLanguageComponent } from './add-language/add-language.component';
import { LanguageComponent } from './language/language.component';
import { AppearanceComponent } from './appearance/appearance.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { PrefixesComponent } from './prefixes/prefixes.component';
import { LocalizationSettingsComponent } from './localization-settings/localization-settings.component';
import { SeoSettingsComponent } from './seo-settings/seo-settings.component';
import { BussinessSettingsComponent } from './bussiness-settings/bussiness-settings.component';
import { LanguageWebComponent } from './language-web/language-web.component';

const routes: Routes = [{ path: '', component: WebsiteSettingsComponent, children:[
  {path:'ai-settings', component:AiSettingsComponent},
  {path:'authentication-settings', component:AuthenticationSettingsComponent},
  {path:'add-language', component:AddLanguageComponent},
  {path:'language', component:LanguageComponent},
  {path:'language-web', component:LanguageWebComponent},
  {path:'appearance', component:AppearanceComponent},
  {path:'preferences', component:PreferencesComponent},
  {path:'prefixes', component:PrefixesComponent},
  {path:'localization-settings', component:LocalizationSettingsComponent},
  {path:'seo-settings', component:SeoSettingsComponent},
  {path:'bussiness-settings', component:BussinessSettingsComponent},
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteSettingsRoutingModule { }
