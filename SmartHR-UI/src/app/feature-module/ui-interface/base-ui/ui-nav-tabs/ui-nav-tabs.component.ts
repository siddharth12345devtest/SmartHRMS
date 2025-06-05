import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';


@Component({
    selector: 'app-ui-nav-tabs',
    templateUrl: './ui-nav-tabs.component.html',
    styleUrl: './ui-nav-tabs.component.scss',
    standalone: false
})
export class UiNavTabsComponent {
  public routes = routes;
}
