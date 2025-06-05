import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.component.html',
    styleUrl: './employee-details.component.scss',
    standalone: false
})
export class EmployeeDetailsComponent {
 public routes=routes;
}
