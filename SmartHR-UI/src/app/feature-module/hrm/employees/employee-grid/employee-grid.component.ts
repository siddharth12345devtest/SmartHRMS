import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { breadCrumbItems } from '../../../../shared/models/models';

@Component({
    selector: 'app-employee-grid',
    templateUrl: './employee-grid.component.html',
    styleUrl: './employee-grid.component.scss',
    standalone: false
})
export class EmployeeGridComponent {
  public routes = routes;
  breadCrumbItems: breadCrumbItems[] =[];
  constructor() {
    this.breadCrumbItems = [
      { label: 'Employee' },
      { label: 'Employee Grid', active: true }
  ];
}

}
