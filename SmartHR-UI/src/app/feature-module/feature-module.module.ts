import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleRoutingModule } from './feature-module-routing.module';
import { FeatureModuleComponent } from './feature-module.component';
import { SharedModule } from '../shared/shared-module';
import { OtpComponent } from '../auth/otp/otp.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from '../auth/signin/signin.component';
import { ResetPasswordComponent } from '../auth/reset-password/reset-password.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { ForgotPasswordComponent } from '../auth/forgot-password/forgot-password.component';
import { DefaultSidebarComponent } from './common/default-sidebar/default-sidebar.component';
import { DefaultHeaderComponent } from './common/default-header/default-header.component';
import { HorizontalSidebarComponent } from './common/horizontal-sidebar/horizontal-sidebar.component';
import { TwoColSidebarComponent } from './common/two-col-sidebar/two-col-sidebar.component';
import { StackedSidebarComponent } from './common/stacked-sidebar/stacked-sidebar.component';
import { ThemeSettingsComponent } from './common/theme-settings/theme-settings.component';
import { StarterComponent } from './pages/starter/starter.component';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { UnderMaintenanceComponent } from './pages/under-maintenance/under-maintenance.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ApiKeyComponent } from './pages/api-key/api-key.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './pages/terms-condition/terms-condition.component';
import { PasswordStrengthComponent } from '../auth/password-strength/password-strength.component';
import { SuccessComponent } from '../auth/success/success.component';



@NgModule({
  declarations: [
    FeatureModuleComponent,
    OtpComponent,
    SigninComponent,
    ResetPasswordComponent,
    SignupComponent,
    ForgotPasswordComponent,
    DefaultSidebarComponent,
    DefaultHeaderComponent,
    HorizontalSidebarComponent,
    TwoColSidebarComponent,
    StackedSidebarComponent,
    ThemeSettingsComponent,
    StarterComponent,
    UnderConstructionComponent,
    UnderMaintenanceComponent,
    ComingSoonComponent,
    PricingComponent,
    TimelineComponent,
    SearchResultComponent,
    ProfileComponent,
    ApiKeyComponent,
    GalleryComponent,
    PrivacyPolicyComponent,
    TermsConditionComponent,
    PasswordStrengthComponent,
    SuccessComponent


  ],
  imports: [
    CommonModule,
    FeatureModuleRoutingModule,
    SharedModule,
    FormsModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatureModuleModule { }
