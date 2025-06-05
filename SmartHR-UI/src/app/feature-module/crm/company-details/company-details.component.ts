import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';

@Component({
    selector: 'app-company-details',
    templateUrl: './company-details.component.html',
    styleUrl: './company-details.component.scss',
    standalone: false
})
export class CompanyDetailsComponent {
routes = routes
}
