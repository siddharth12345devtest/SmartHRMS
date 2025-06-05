import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
    selector: 'app-permissions',
    templateUrl: './permissions.component.html',
    styleUrl: './permissions.component.scss',
    standalone: false
})
export class PermissionsComponent {
routes = routes
}
