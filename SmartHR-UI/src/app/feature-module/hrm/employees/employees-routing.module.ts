import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    children: [
      {
        path: '',
        redirectTo: 'employee-list',
        pathMatch: 'full',
      },
      {
        path: 'employee-list',
        loadChildren: () =>
          import('./employee-list/employee-list.module').then(
            (m) => m.EmployeeListModule
          ),
      },
      {
        path: 'employee-grid',
        loadChildren: () =>
          import('./employee-grid/employee-grid.module').then(
            (m) => m.EmployeeGridModule
          ),
      },
      {
        path: 'employee-details',
        loadChildren: () =>
          import('./employee-details/employee-details.module').then(
            (m) => m.EmployeeDetailsModule
          ),
      },
      {
        path: 'departments',
        loadChildren: () =>
          import('./departments/departments.module').then(
            (m) => m.DepartmentsModule
          ),
      },
      {
        path: 'designations',
        loadChildren: () =>
          import('./designations/designations.module').then(
            (m) => m.DesignationsModule
          ),
      },
      {
        path: 'policy',
        loadChildren: () =>
          import('./policy/policy.module').then((m) => m.PolicyModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
