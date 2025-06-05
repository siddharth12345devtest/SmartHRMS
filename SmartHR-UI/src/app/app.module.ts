import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared-module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { Login2Component } from './auth/login-2/login-2.component';
import { Login3Component } from './auth/login-3/login-3.component';
import { RegisterComponent } from './auth/register/register.component';
import { Register2Component } from './auth/register-2/register-2.component';
import { Register3Component } from './auth/register-3/register-3.component';
import { ResetPassword2Component } from './auth/reset-password-2/reset-password-2.component';
import { ResetPassword3Component } from './auth/reset-password-3/reset-password-3.component';
import { EmailVerificationComponent } from './auth/email-verification/email-verification.component';
import { EmailVerification2Component } from './auth/email-verification-2/email-verification-2.component';
import { EmailVerification3Component } from './auth/email-verification-3/email-verification-3.component';
import { TwoStepVerificationComponent } from './auth/two-step-verification/two-step-verification.component';
import { TwoStepVerification2Component } from './auth/two-step-verification-2/two-step-verification-2.component';
import { TwoStepVerification3Component } from './auth/two-step-verification-3/two-step-verification-3.component';
import { ForgotPassword3Component } from './auth/forgot-password-3/forgot-password-3.component';
import { ForgotPassword2Component } from './auth/forgot-password-2/forgot-password-2.component';
import { Success2Component } from './auth/success-2/success-2.component';
import { Success3Component } from './auth/success-3/success-3.component';
import { LockScreenComponent } from './auth/lock-screen/lock-screen.component';
import { Error404Component } from './auth/error-404/error-404.component';
import { Error500Component } from './auth/error-500/error-500.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminDashboardComponent } from './feature-module/dashboard/admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Login2Component,
    Login3Component,
    RegisterComponent,
    Register2Component,
    Register3Component,
    ResetPassword2Component,
    ResetPassword3Component,
    EmailVerificationComponent,
    EmailVerification2Component,
    EmailVerification3Component,
    TwoStepVerificationComponent,
    TwoStepVerification2Component,
    TwoStepVerification3Component,
    ForgotPassword3Component,
    ForgotPassword2Component,
    Success2Component,
    Success3Component,
    LockScreenComponent,
    Error404Component,
    Error500Component,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgScrollbarModule
  ],
  providers: [

    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
