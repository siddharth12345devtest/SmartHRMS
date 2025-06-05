import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
    selector: 'app-ui-progress',
    templateUrl: './ui-progress.component.html',
    styleUrl: './ui-progress.component.scss',
    standalone: false
})
export class UiProgressComponent {
  public routes = routes;
}
