import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeavesComponent } from './leaves.component';
import { LeaveAdminComponent } from './leave-admin/leave-admin.component';
import { LeaveEmployeeComponent } from './leave-employee/leave-employee.component';
import { LeaveSettingsComponent } from './leave-settings/leave-settings.component';

const routes: Routes = [
  { path: '', 
    component: LeavesComponent,
    children:[
      { path: 'leave-admin', component: LeaveAdminComponent },
      { path: 'leave-employee', component: LeaveEmployeeComponent },
      { path: 'leave-settings', component: LeaveSettingsComponent },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeavesRoutingModule { }
