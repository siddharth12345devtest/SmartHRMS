import { Component } from '@angular/core';
import { breadCrumbItems } from '../../../shared/models/models';

@Component({
    selector: 'app-terms-condition',
    templateUrl: './terms-condition.component.html',
    styleUrl: './terms-condition.component.scss',
    standalone: false
})
export class TermsConditionComponent {
  breadCrumbItems: breadCrumbItems[] =[];
  constructor() {
    this.breadCrumbItems = [
      { label: 'Pages' },
      { label: 'Terms & Conditions', active: true }
  ];
}
}
