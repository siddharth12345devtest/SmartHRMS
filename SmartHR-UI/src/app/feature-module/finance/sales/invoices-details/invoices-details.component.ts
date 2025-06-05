import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
    selector: 'app-invoices-details',
    templateUrl: './invoices-details.component.html',
    styleUrl: './invoices-details.component.scss',
    standalone: false
})
export class InvoicesDetailsComponent {
routes = routes
}
