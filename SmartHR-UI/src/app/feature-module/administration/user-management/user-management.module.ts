import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { SharedModule } from '../../../shared/shared-module';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';
import { UsersComponent } from './users/users.component';
import { RolesPermissionsComponent } from './roles-permissions/roles-permissions.component';
import { PermissionsComponent } from './permissions/permissions.component';


@NgModule({
  declarations: [
    UserManagementComponent,
    UsersComponent,
    RolesPermissionsComponent,
    PermissionsComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    SharedModule,
    CustomPaginationModule
  ]
})
export class UserManagementModule { }
