import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';


@Component({
    selector: 'app-icon-feather',
    templateUrl: './icon-feather.component.html',
    styleUrls: ['./icon-feather.component.scss'],
    standalone: false
})
export class IconFeatherComponent {
  public routes = routes;
}
