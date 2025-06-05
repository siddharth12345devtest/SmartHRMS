import { routes } from './../../../shared/routes/routes';
import { Component } from '@angular/core';
import { breadCrumbItems } from '../../../shared/models/models';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.scss',
    standalone: false
})
export class TasksComponent {
  public routes = routes
  breadCrumbItems: breadCrumbItems[] =[];
  constructor() {
    this.breadCrumbItems = [
      { label: 'Projects' },
      { label: 'Task', active: true }
  ];
}
}
