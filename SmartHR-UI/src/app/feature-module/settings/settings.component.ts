import { Component } from '@angular/core';
import { breadCrumbItems } from '../../shared/models/models';
import { CommonService } from '../../shared/common/common.service';
import { routes } from '../../shared/routes/routes';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss',
    standalone: false
})
export class SettingsComponent {
  base = '';
  page = '';
  last = '';
  breadCrumbItems: breadCrumbItems[] =[];
  routes = routes
  constructor(private common: CommonService) {
    this.common.base.subscribe((res: string) => {
      this.base = res;
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
    });
    this.breadCrumbItems = [
      { label: 'Administration' },
      { label: 'Settings', active: true }
  ];
}
}
