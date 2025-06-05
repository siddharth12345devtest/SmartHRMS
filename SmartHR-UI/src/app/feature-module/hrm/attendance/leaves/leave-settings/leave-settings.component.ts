import { Component } from '@angular/core';
import { routes } from '../../../../../shared/routes/routes';
import { breadCrumbItems } from '../../../../../shared/models/models';

@Component({
    selector: 'app-leave-settings',
    templateUrl: './leave-settings.component.html',
    styleUrl: './leave-settings.component.scss',
    standalone: false
})
export class LeaveSettingsComponent {
  public routes = routes;
  initChecked = false;
  breadCrumbItems: breadCrumbItems[] =[];
  constructor(){
    this.breadCrumbItems = [
            { label: 'Performance' },
            { label: 'Performance Reviews', active: true }
        ];
  }
}
