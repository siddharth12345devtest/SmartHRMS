import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';


@Component({
    selector: 'app-ui-timeline',
    templateUrl: './ui-timeline.component.html',
    styleUrl: './ui-timeline.component.scss',
    standalone: false
})
export class UiTimelineComponent {
  public routes = routes;
}
