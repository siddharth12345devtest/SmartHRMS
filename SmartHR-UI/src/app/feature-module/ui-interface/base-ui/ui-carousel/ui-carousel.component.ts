import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';


@Component({
    selector: 'app-ui-carousel',
    templateUrl: './ui-carousel.component.html',
    styleUrl: './ui-carousel.component.scss',
    standalone: false
})
export class UiCarouselComponent {
  public routes = routes;
}
