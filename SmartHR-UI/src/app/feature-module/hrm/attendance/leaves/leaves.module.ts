import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavesRoutingModule } from './leaves-routing.module';
import { LeavesComponent } from './leaves.component';
import { LeaveAdminComponent } from './leave-admin/leave-admin.component';
import { LeaveSettingsComponent } from './leave-settings/leave-settings.component';
import { LeaveEmployeeComponent } from './leave-employee/leave-employee.component';
import { SharedModule } from '../../../../shared/shared-module';
import { CustomPaginationModule } from '../../../../shared/custom-pagination/custom-pagination.module';
import { LeaveModalComponent } from './leave-modal/leave-modal.component';
import { MatChip, MatChipsModule } from '@angular/material/chips';
import { ChipsModule } from 'primeng/chips';
import { materialModule } from '../../../../shared/material.module';


@NgModule({
  declarations: [
    LeavesComponent,
    LeaveAdminComponent,
    LeaveSettingsComponent,
    LeaveEmployeeComponent,
    LeaveModalComponent
  ],
  imports: [
    CommonModule,
    LeavesRoutingModule,
    SharedModule,
    CustomPaginationModule,
    ChipsModule,
    MatChipsModule,
    materialModule
  ],

})
export class LeavesModule { }
