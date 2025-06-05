import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';


@Component({
    selector: 'app-ui-typography',
    templateUrl: './ui-typography.component.html',
    styleUrl: './ui-typography.component.scss',
    standalone: false
})
export class UiTypographyComponent {
  public routes = routes;
}
