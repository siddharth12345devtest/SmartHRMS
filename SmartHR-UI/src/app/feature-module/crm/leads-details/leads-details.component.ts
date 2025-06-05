import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';

@Component({
    selector: 'app-leads-details',
    templateUrl: './leads-details.component.html',
    styleUrl: './leads-details.component.scss',
    standalone: false
})
export class LeadsDetailsComponent {
routes = routes
}
