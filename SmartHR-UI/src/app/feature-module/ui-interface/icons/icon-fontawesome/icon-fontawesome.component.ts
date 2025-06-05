import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';


@Component({
    selector: 'app-icon-fontawesome',
    templateUrl: './icon-fontawesome.component.html',
    styleUrls: ['./icon-fontawesome.component.scss'],
    standalone: false
})
export class IconFontawesomeComponent {
  public routes = routes;
}
