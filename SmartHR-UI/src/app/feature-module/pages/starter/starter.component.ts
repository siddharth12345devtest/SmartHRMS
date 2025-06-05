import { Component } from '@angular/core';
import { breadCrumbItems } from '../../../shared/models/models';
@Component({
    selector: 'app-starter',
    templateUrl: './starter.component.html',
    styleUrl: './starter.component.scss',
    standalone: false
})
export class StarterComponent {
  breadCrumbItems: breadCrumbItems[] =[];
  constructor() {
    this.breadCrumbItems = [
      { label: 'Pages' },
      { label: 'Starter', active: true }
  ];
}
}
