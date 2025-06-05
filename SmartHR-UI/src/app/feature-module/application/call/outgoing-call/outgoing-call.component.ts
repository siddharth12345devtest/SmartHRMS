import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { breadCrumbItems } from '../../../../shared/models/models';

@Component({
    selector: 'app-outgoing-call',
    templateUrl: './outgoing-call.component.html',
    styleUrl: './outgoing-call.component.scss',
    standalone: false
})
export class OutgoingCallComponent {
  public routes = routes;
  breadCrumbItems: breadCrumbItems[] =[];
  constructor(){
    this.breadCrumbItems = [
      { label: 'Application' },
      { label: 'Outgoing Calls', active: true }
  ];
  }
}
