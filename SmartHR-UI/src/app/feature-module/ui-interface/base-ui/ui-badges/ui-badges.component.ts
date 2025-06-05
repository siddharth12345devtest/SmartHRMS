import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';


@Component({
    selector: 'app-ui-badges',
    templateUrl: './ui-badges.component.html',
    styleUrl: './ui-badges.component.scss',
    standalone: false
})
export class UiBadgesComponent {
  public routes = routes;
}
