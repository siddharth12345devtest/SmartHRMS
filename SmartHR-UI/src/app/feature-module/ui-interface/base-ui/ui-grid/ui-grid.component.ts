import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';


@Component({
    selector: 'app-ui-grid',
    templateUrl: './ui-grid.component.html',
    styleUrl: './ui-grid.component.scss',
    standalone: false
})
export class UiGridComponent {
  public routes = routes;
}
