import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';

@Component({
    selector: 'app-under-construction',
    templateUrl: './under-construction.component.html',
    styleUrl: './under-construction.component.scss',
    standalone: false
})
export class UnderConstructionComponent {
routes= routes
}
