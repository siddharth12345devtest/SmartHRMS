import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { breadCrumbItems } from '../../../../shared/models/models';

@Component({
    selector: 'app-incoming-call',
    templateUrl: './incoming-call.component.html',
    styleUrl: './incoming-call.component.scss',
    standalone: false
})
export class IncomingCallComponent {
  public routes = routes;
  breadCrumbItems: breadCrumbItems[] =[];
  constructor(){
    this.breadCrumbItems = [
      { label: 'Application' },
      { label: 'Incoming Calls', active: true }
  ];
  }
}
