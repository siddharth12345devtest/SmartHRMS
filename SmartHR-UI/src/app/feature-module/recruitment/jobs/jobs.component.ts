import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';

@Component({
    selector: 'app-jobs',
    templateUrl: './jobs.component.html',
    styleUrl: './jobs.component.scss',
    standalone: false
})
export class JobsComponent {
public routes=routes
}
