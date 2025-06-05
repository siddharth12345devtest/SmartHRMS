import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';


@Component({
    selector: 'app-icon-ionic',
    templateUrl: './icon-ionic.component.html',
    styleUrls: ['./icon-ionic.component.scss'],
    standalone: false
})
export class IconIonicComponent {
  public routes = routes;
}
