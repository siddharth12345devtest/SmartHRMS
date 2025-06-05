import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteSettingsRoutingModule } from './website-settings-routing.module';
import { WebsiteSettingsComponent } from './website-settings.component';
import { BussinessSettingsComponent } from './bussiness-settings/bussiness-settings.component';
import { SeoSettingsComponent } from './seo-settings/seo-settings.component';
import { LocalizationSettingsComponent } from './localization-settings/localization-settings.component';
import { PrefixesComponent } from './prefixes/prefixes.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { AppearanceComponent } from './appearance/appearance.component';
import { LanguageComponent } from './language/language.component';
import { AddLanguageComponent } from './add-language/add-language.component';
import { AuthenticationSettingsComponent } from './authentication-settings/authentication-settings.component';
import { AiSettingsComponent } from './ai-settings/ai-settings.component';
import { LanguageWebComponent } from './language-web/language-web.component';
import { SharedModule } from '../../../shared/shared-module';


@NgModule({
  declarations: [
    WebsiteSettingsComponent,
    BussinessSettingsComponent,
    SeoSettingsComponent,
    LocalizationSettingsComponent,
    PrefixesComponent,
    PreferencesComponent,
    AppearanceComponent,
    LanguageComponent,
    AddLanguageComponent,
    AuthenticationSettingsComponent,
    AiSettingsComponent,
    LanguageWebComponent
  ],
  imports: [
    CommonModule,
    WebsiteSettingsRoutingModule,
    SharedModule
  ]
})
export class WebsiteSettingsModule { }
