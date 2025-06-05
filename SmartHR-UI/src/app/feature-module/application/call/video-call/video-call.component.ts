import { AfterViewInit, Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { breadCrumbItems } from '../../../../shared/models/models';

export interface videocallModel {
  img: string;
  name: string;
}
@Component({
    selector: 'app-video-call',
    templateUrl: './video-call.component.html',
    styleUrl: './video-call.component.scss',
    standalone: false
})
export class VideoCallComponent {
  public routes=routes
  isChatSearchVisible: boolean = false; 
  isChatUser:boolean=false;
  breadCrumbItems: breadCrumbItems[] =[];
  constructor(){
    this.breadCrumbItems = [
      { label: 'Application' },
      { label: 'Calls', active: true }
  ];
  }
  toggleChatSearch() {
    this.isChatSearchVisible = !this.isChatSearchVisible;
  }
  toggleuser(){
    this.isChatUser=!this.isChatUser;
  }
  toggleclose(){
    this.isChatSearchVisible=false;
  }
  elem = document.documentElement;
  fullscreen() {
    if (!document.fullscreenElement) {
      this.elem.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
}
