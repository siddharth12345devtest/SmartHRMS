import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { breadCrumbItems } from '../../../../shared/models/models';

@Component({
    selector: 'app-voice-call',
    templateUrl: './voice-call.component.html',
    styleUrl: './voice-call.component.scss',
    standalone: false
})
export class VoiceCallComponent {
  public routes = routes;
  breadCrumbItems: breadCrumbItems[] =[];
  constructor(){
    this.breadCrumbItems = [
      { label: 'Application' },
      { label: 'Voice Call', active: true }
  ];
  }
}
