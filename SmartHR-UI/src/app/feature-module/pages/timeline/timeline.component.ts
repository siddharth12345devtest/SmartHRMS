import { Component } from '@angular/core';
import { breadCrumbItems } from '../../../shared/models/models';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrl: './timeline.component.scss',
    standalone: false
})
export class TimelineComponent {
  breadCrumbItems: breadCrumbItems[] =[];
  constructor() {
    this.breadCrumbItems = [
      { label: 'Pages' },
      { label: 'Timeline', active: true }
  ];
}
}
