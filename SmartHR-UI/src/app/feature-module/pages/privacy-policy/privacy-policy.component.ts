import { Component } from '@angular/core';
import { breadCrumbItems } from '../../../shared/models/models';

@Component({
    selector: 'app-privacy-policy',
    templateUrl: './privacy-policy.component.html',
    styleUrl: './privacy-policy.component.scss',
    standalone: false
})
export class PrivacyPolicyComponent {
  breadCrumbItems: breadCrumbItems[] =[];
  constructor() {
    this.breadCrumbItems = [
      { label: 'Pages' },
      { label: 'Privacy Policy', active: true }
  ];
}
}
