import { Component, OnDestroy } from '@angular/core';
import { breadCrumbItems } from '../../../shared/models/models';
import { routes } from '../../../shared/routes/routes';

@Component({
    selector: 'app-client-grid',
    templateUrl: './client-grid.component.html',
    styleUrl: './client-grid.component.scss',
    standalone: false
})
export class ClientGridComponent implements OnDestroy{
  public password: boolean[] = [false,false,false,false];
  isOpen = false
  public routes = routes;
  breadCrumbItems: breadCrumbItems[] =[];
  constructor() {
    this.breadCrumbItems = [
      { label: 'Client' },
      { label: 'Client Grid', active: true }
  ];
}
  togglePassword(index: number) {
    this.password[index] = !this.password[index];
  }
  openSuccessModal() {
    this.isOpen = !this.isOpen;
  }
  ngOnDestroy(): void {
    this.isOpen = false
  }
}
