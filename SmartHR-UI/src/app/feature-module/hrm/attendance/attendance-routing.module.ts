import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance.component';
import { AttendanceAdminComponent } from './attendance-admin/attendance-admin.component';
import { AttendanceEmployeeComponent } from './attendance-employee/attendance-employee.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ShiftScheduleComponent } from './shift-schedule/shift-schedule.component';
import { OvertimeComponent } from './overtime/overtime.component';

const routes: Routes = [
  { path: '', 
    component: AttendanceComponent,
    children:[
      { path: 'attendance-admin', component: AttendanceAdminComponent },
      { path: 'attendance-employee', component: AttendanceEmployeeComponent },
      { path: 'timesheet', component: TimesheetComponent },
      { path: 'shift-schedule', component: ShiftScheduleComponent },
      { path: 'overtime', component: OvertimeComponent },
      { path: 'leaves', loadChildren: () => import('./leaves/leaves.module').then(m => m.LeavesModule) },
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
