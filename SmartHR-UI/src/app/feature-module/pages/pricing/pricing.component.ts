import { Component } from '@angular/core';
import { breadCrumbItems } from '../../../shared/models/models';

@Component({
    selector: 'app-pricing',
    templateUrl: './pricing.component.html',
    styleUrl: './pricing.component.scss',
    standalone: false
})
export class PricingComponent {
  breadCrumbItems: breadCrumbItems[] =[];
  constructor() {
    this.breadCrumbItems = [
      { label: 'Pages' },
      { label: 'Pricing', active: true }
  ];
}
}
