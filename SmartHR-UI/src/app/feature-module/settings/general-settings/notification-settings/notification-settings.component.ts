import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
    selector: 'app-notification-settings',
    templateUrl: './notification-settings.component.html',
    styleUrl: './notification-settings.component.scss',
    standalone: false
})
export class NotificationSettingsComponent {
routes = routes
}
