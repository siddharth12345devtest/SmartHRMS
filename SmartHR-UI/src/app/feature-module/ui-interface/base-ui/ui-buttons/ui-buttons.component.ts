import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';


@Component({
    selector: 'app-ui-buttons',
    templateUrl: './ui-buttons.component.html',
    styleUrl: './ui-buttons.component.scss',
    standalone: false
})
export class UiButtonsComponent {
  public routes = routes;
}
