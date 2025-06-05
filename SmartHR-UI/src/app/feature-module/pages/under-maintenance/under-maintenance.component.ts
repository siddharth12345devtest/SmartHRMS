import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';

@Component({
    selector: 'app-under-maintenance',
    templateUrl: './under-maintenance.component.html',
    styleUrl: './under-maintenance.component.scss',
    standalone: false
})
export class UnderMaintenanceComponent {
routes = routes
}
