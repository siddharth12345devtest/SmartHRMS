import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';


@Component({
    selector: 'app-ui-alerts',
    templateUrl: './ui-alerts.component.html',
    styleUrl: './ui-alerts.component.scss',
    standalone: false
})
export class UiAlertsComponent {
  public routes = routes;
}
