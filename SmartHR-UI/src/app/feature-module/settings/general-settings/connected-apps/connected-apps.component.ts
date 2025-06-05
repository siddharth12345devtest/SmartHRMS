import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
    selector: 'app-connected-apps',
    templateUrl: './connected-apps.component.html',
    styleUrl: './connected-apps.component.scss',
    standalone: false
})
export class ConnectedAppsComponent {
routes = routes
}
