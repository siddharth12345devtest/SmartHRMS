import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';


@Component({
    selector: 'app-ui-colors',
    templateUrl: './ui-colors.component.html',
    styleUrl: './ui-colors.component.scss',
    standalone: false
})
export class UiColorsComponent {
  public routes = routes;
}
