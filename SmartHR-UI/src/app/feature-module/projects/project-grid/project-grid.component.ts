import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import { breadCrumbItems } from '../../../shared/models/models';

@Component({
    selector: 'app-project-grid',
    templateUrl: './project-grid.component.html',
    styleUrl: './project-grid.component.scss',
    standalone: false
})
export class ProjectGridComponent {
  public routes = routes
  breadCrumbItems: breadCrumbItems[] =[];
  constructor() {
    this.breadCrumbItems = [
      { label: 'Projects' },
      { label: 'Projects Grid', active: true }
  ];
}
}
