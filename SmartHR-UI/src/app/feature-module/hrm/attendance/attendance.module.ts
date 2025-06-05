import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance.component';
import { SharedModule } from '../../../shared/shared-module';
import { AttendanceAdminComponent } from './attendance-admin/attendance-admin.component';
import { AttendanceModalComponent } from './attendance-modal/attendance-modal.component';
import { CustomPaginationModule } from '../../../shared/custom-pagination/custom-pagination.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { AttendanceEmployeeComponent } from './attendance-employee/attendance-employee.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ShiftScheduleComponent } from './shift-schedule/shift-schedule.component';
import { OvertimeComponent } from './overtime/overtime.component';


@NgModule({
  declarations: [
    AttendanceComponent,
    AttendanceAdminComponent,
    AttendanceModalComponent,
    AttendanceEmployeeComponent,
    TimesheetComponent,
    ShiftScheduleComponent,
    OvertimeComponent
  ],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    SharedModule,
    CustomPaginationModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    TimepickerModule.forRoot(),
  ]
})
export class AttendanceModule { }
