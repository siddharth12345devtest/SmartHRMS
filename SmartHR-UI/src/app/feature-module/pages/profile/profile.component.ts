import { Component } from '@angular/core';
import { breadCrumbItems } from '../../../shared/models/models';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    standalone: false
})
export class ProfileComponent {
  breadCrumbItems: breadCrumbItems[] =[];
  public password: boolean[] = [false,false,false];
  togglePassword(index: number) {
    this.password[index] = !this.password[index];
  }
  constructor() {
    this.breadCrumbItems = [
      { label: 'Pages' },
      { label: 'Profile', active: true }
  ];
}
}
