import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';

@Component({
    selector: 'app-deals-details',
    templateUrl: './deals-details.component.html',
    styleUrl: './deals-details.component.scss',
    standalone: false
})
export class DealsDetailsComponent {
public routes=routes;
}
