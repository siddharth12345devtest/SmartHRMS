import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import { CommonService } from '../../../shared/common/common.service';

@Component({
    selector: 'app-system-settings',
    templateUrl: './system-settings.component.html',
    styleUrl: './system-settings.component.scss',
    standalone: false
})
export class SystemSettingsComponent {
  base = '';
  page = '';
  last = '';
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
}
}
