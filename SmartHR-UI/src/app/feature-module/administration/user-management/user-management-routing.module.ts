import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management.component';
import { UsersComponent } from './users/users.component';
import { RolesPermissionsComponent } from './roles-permissions/roles-permissions.component';
import { PermissionsComponent } from './permissions/permissions.component';

const routes: Routes = [{ path: '', component: UserManagementComponent, children:[
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'roles-permissions',
    component: RolesPermissionsComponent,
  },
  {
    path: 'permissions',
    component: PermissionsComponent,
  },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
