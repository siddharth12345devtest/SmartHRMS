import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import { breadCrumbItems } from '../../../shared/models/models';

@Component({
    selector: 'app-packages-grid',
    templateUrl: './packages-grid.component.html',
    styleUrl: './packages-grid.component.scss',
    standalone: false
})
export class PackagesGridComponent {
  public routes = routes;
  breadCrumbItems: breadCrumbItems[] =[];
  constructor() {
    this.breadCrumbItems = [
      { label: 'Super Admin' },
      { label: 'Purchase Transaction List', active: true }
  ];
}
}
