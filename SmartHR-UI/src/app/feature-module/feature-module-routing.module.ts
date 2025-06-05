import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureModuleComponent } from './feature-module.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { OtpComponent } from '../auth/otp/otp.component';
import { ForgotPasswordComponent } from '../auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../auth/reset-password/reset-password.component';
import { SuccessComponent } from '../auth/success/success.component';
import { LoginComponent } from '../auth/login/login.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { StarterComponent } from './pages/starter/starter.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { UnderMaintenanceComponent } from './pages/under-maintenance/under-maintenance.component';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './pages/terms-condition/terms-condition.component';
import { Login2Component } from '../auth/login-2/login-2.component';
import { Login3Component } from '../auth/login-3/login-3.component';
import { ForgotPassword2Component } from '../auth/forgot-password-2/forgot-password-2.component';
import { ForgotPassword3Component } from '../auth/forgot-password-3/forgot-password-3.component';
import { ResetPassword2Component } from '../auth/reset-password-2/reset-password-2.component';
import { ResetPassword3Component } from '../auth/reset-password-3/reset-password-3.component';
import { RegisterComponent } from '../auth/register/register.component';
import { Register2Component } from '../auth/register-2/register-2.component';
import { Register3Component } from '../auth/register-3/register-3.component';
import { EmailVerificationComponent } from '../auth/email-verification/email-verification.component';
import { EmailVerification2Component } from '../auth/email-verification-2/email-verification-2.component';
import { EmailVerification3Component } from '../auth/email-verification-3/email-verification-3.component';
import { TwoStepVerificationComponent } from '../auth/two-step-verification/two-step-verification.component';
import { TwoStepVerification2Component } from '../auth/two-step-verification-2/two-step-verification-2.component';
import { TwoStepVerification3Component } from '../auth/two-step-verification-3/two-step-verification-3.component';
import { PasswordStrengthComponent } from '../auth/password-strength/password-strength.component';
import { Success3Component } from '../auth/success-3/success-3.component';
import { Success2Component } from '../auth/success-2/success-2.component';
import { LockScreenComponent } from '../auth/lock-screen/lock-screen.component';
import { Error404Component } from '../auth/error-404/error-404.component';
import { Error500Component } from '../auth/error-500/error-500.component';
import { ModalDashboardComponent } from './dashboard/modal-dashboard/modal-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureModuleComponent,
    children: [

      {
        path: 'signin',
        component: SigninComponent,
      },

      {
        path: 'login-2',
        component: Login2Component,
      },
      {
        path: 'login-3',
        component: Login3Component,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'otp',
        component: OtpComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
      {
        path: 'forgot-password-2',
        component: ForgotPassword2Component,
      },
      {
        path: 'forgot-password-3',
        component: ForgotPassword3Component,
      },
      {
        path: 'password-strength',
        component: PasswordStrengthComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
      },
      {
        path: 'reset-password-2',
        component: ResetPassword2Component,
      },
      {
        path: 'reset-password-3',
        component: ResetPassword3Component,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'register-2',
        component: Register2Component,
      },
      {
        path: 'register-3',
        component: Register3Component,
      },
      {
        path: 'email-verification',
        component: EmailVerificationComponent,
      },
      {
        path: 'email-verification-2',
        component: EmailVerification2Component,
      },
      {
        path: 'email-verification-3',
        component: EmailVerification3Component,
      },
      {
        path: 'two-step-verification',
        component: TwoStepVerificationComponent,
      },
      {
        path: 'two-step-verification-2',
        component: TwoStepVerification2Component,
      },
      {
        path: 'two-step-verification-3',
        component: TwoStepVerification3Component,
      },
      {
        path: 'success',
        component: SuccessComponent,
      },
      {
        path: 'success-2',
        component: Success2Component,
      },
      {
        path: 'success-3',
        component: Success3Component,
      },
      {
        path: 'lock-screen',
        component: LockScreenComponent,
      },

      {
        path: 'error-404',
        component: Error404Component,
      },

      {
        path: 'error-500',
        component: Error500Component,
      },
      {
        path: 'starter',
        component: StarterComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'gallery',
        component: GalleryComponent,
      },
      {
        path: 'search-result',
        component: SearchResultComponent,
      },
      {
        path: 'timeline',
        component: TimelineComponent,
      },
      {
        path: 'pricing',
        component: PricingComponent,
      },
      {
        path: 'coming-soon',
        component: ComingSoonComponent,
      },
      {
        path: 'under-maintenance',
        component: UnderMaintenanceComponent,
      },
      {
        path: 'under-construction',
        component: UnderConstructionComponent,
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
      },
      {
        path: 'terms-condition',
        component: TermsConditionComponent,
      },

      {
        path: 'table',
        loadChildren: () =>
          import('./ui-interface/table/table.module').then(
            (m) => m.TableModule
          ),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./ui-interface/forms/forms.module').then(
            (m) => m.FormsModule
          ),
      },
      {
        path: 'icon',
        loadChildren: () =>
          import('./ui-interface/icons/icons.module').then(
            (m) => m.IconsModule
          ),
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./ui-interface/charts/charts.module').then(
            (m) => m.ChartsModule
          ),
      },
      {
        path: 'base-ui',
        loadChildren: () =>
          import('./ui-interface/base-ui/base-ui.module').then(
            (m) => m.BaseUiModule
          ),
      },
      {
        path: 'advanced-ui',
        loadChildren: () =>
          import('./ui-interface/advanced-ui/advanced-ui.module').then(
            (m) => m.AdvancedUiModule
          ),
      },
      {
        path: 'application',
        loadChildren: () =>
          import('./application/application.module').then(
            (m) => m.ApplicationModule
          ),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      { path: 'super-admin', loadChildren: () => import('./super-admin/super-admin.module').then(m => m.SuperAdminModule) },
      { path: 'layout-horizontal', component: ModalDashboardComponent },
      { path: 'layout-detached', component: ModalDashboardComponent },
      { path: 'layout-modern', component: ModalDashboardComponent },
      { path: 'layout-two-column', component: ModalDashboardComponent },
      { path: 'layout-hovered', component: ModalDashboardComponent },
      { path: 'layout-boxed', component: ModalDashboardComponent },
      { path: 'layout-horizontal-single', component: ModalDashboardComponent },
      { path: 'layout-horizontal-overlay', component: ModalDashboardComponent },
      { path: 'layout-horizontal-box', component: ModalDashboardComponent },
      { path: 'layout-horizontal-sidemenu', component: ModalDashboardComponent },
      { path: 'layout-vertical-transparent', component: ModalDashboardComponent },
      { path: 'layout-without-header', component: ModalDashboardComponent },
      { path: 'layout-default', component: ModalDashboardComponent },
      { path: 'layout-rtl', component: ModalDashboardComponent },
      { path: 'layout-dark', component: ModalDashboardComponent },
      { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
      { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
      { path: 'crm', loadChildren: () => import('./crm/crm.module').then(m => m.CrmModule) },
      { path: 'employees', loadChildren: () => import('./hrm/employees/employees.module').then(m => m.EmployeesModule) },
      { path: 'tickets', loadChildren: () => import('./hrm/tickets/tickets.module').then(m => m.TicketsModule) },
      { path: 'holidays', loadChildren: () => import('./hrm/holidays/holidays.module').then(m => m.HolidaysModule) },
      { path: 'attendance', loadChildren: () => import('./hrm/attendance/attendance.module').then(m => m.AttendanceModule) },
      { path: 'promotion', loadChildren: () => import('./hrm/promotion/promotion.module').then(m => m.PromotionModule) },
      { path: 'resignation', loadChildren: () => import('./hrm/resignation/resignation.module').then(m => m.ResignationModule) },
      { path: 'termination', loadChildren: () => import('./hrm/termination/termination.module').then(m => m.TerminationModule) },
      { path: 'trainings', loadChildren: () => import('./hrm/trainings/trainings.module').then(m => m.TrainingsModule) },
      { path: 'performance', loadChildren: () => import('./hrm/performance/performance.module').then(m => m.PerformanceModule) },
      { path: 'jobs', loadChildren: () => import('./recruitment/jobs/jobs.module').then(m => m.JobsModule) },
      { path: 'candidates', loadChildren: () => import('./recruitment/candidates/candidates.module').then(m => m.CandidatesModule) },
      { path: 'refferals', loadChildren: () => import('./recruitment/refferals/refferals.module').then(m => m.RefferalsModule) },
      { path: 'sales', loadChildren: () => import('./finance/sales/sales.module').then(m => m.SalesModule) },
      { path: 'accounting', loadChildren: () => import('./finance/accounting/accounting.module').then(m => m.AccountingModule) },
      { path: 'payroll', loadChildren: () => import('./finance/payroll/payroll.module').then(m => m.PayrollModule) },
      { path: 'assets', loadChildren: () => import('./administration/assets/assets.module').then(m => m.AssetsModule) },
      { path: 'reports', loadChildren: () => import('./administration/reports/reports.module').then(m => m.ReportsModule) },
      { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      { path: 'api-keys', loadChildren: () => import('./pages/api-keys/api-keys.module').then(m => m.ApiKeysModule) },
      { path: 'pages', loadChildren: () => import('./content/pages/pages.module').then(m => m.PagesModule) },
      { path: 'blogs', loadChildren: () => import('./content/blogs/blogs.module').then(m => m.BlogsModule) },
      { path: 'locations', loadChildren: () => import('./content/locations/locations.module').then(m => m.LocationsModule) },
      { path: 'faq', loadChildren: () => import('./content/faq/faq.module').then(m => m.FaqModule) },
      { path: 'testimonials', loadChildren: () => import('./content/testimonials/testimonials.module').then(m => m.TestimonialsModule) },
      { path: 'support', loadChildren: () => import('./administration/support/support.module').then(m => m.SupportModule) },
      { path: 'user-management', loadChildren: () => import('./administration/user-management/user-management.module').then(m => m.UserManagementModule) },
      { path: 'maps', loadChildren: () => import('./ui-interface/maps/maps.module').then(m => m.MapsModule) },
      ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureModuleRoutingModule {}
