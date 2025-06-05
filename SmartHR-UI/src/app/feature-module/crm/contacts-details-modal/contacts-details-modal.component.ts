import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';

@Component({
    selector: 'app-contacts-details-modal',
    templateUrl: './contacts-details-modal.component.html',
    styleUrl: './contacts-details-modal.component.scss',
    standalone: false
})
export class ContactsDetailsModalComponent {
public routes=routes;
}
