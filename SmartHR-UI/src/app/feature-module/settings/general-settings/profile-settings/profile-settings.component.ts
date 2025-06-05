import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
    selector: 'app-profile-settings',
    templateUrl: './profile-settings.component.html',
    styleUrl: './profile-settings.component.scss',
    standalone: false
})
export class ProfileSettingsComponent {
routes = routes
}
