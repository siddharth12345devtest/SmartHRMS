import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';

@Component({
    selector: 'app-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.scss'],
    standalone: false
})
export class EmailComponent {

  public routes = routes;
  showCompose = false;
  showEmail = false;
  showLabels = false;
  showFolder = false;
  displayCompose() {
    this.showCompose = !this.showCompose;
  }
  showMoreEmail() {
    this.showEmail = !this.showEmail;
  }
  showMoreLabel() {
    this.showLabels = !this.showLabels;
  }
  showMoreFolder() {
    this.showFolder = !this.showFolder;
  }


}
