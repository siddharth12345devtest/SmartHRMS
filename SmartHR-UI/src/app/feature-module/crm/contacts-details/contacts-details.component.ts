import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';

@Component({
    selector: 'app-contacts-details',
    templateUrl: './contacts-details.component.html',
    styleUrl: './contacts-details.component.scss',
    standalone: false
})
export class ContactsDetailsComponent {
routes = routes
}
