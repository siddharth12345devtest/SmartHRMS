import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './feature-module/dashboard/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/index',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./feature-module/feature-module.module').then(
        (m) => m.FeatureModuleModule
      ),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
