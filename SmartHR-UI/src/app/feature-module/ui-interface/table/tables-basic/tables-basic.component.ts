import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
    selector: 'app-tables-basic',
    templateUrl: './tables-basic.component.html',
    styleUrl: './tables-basic.component.scss',
    standalone: false
})
export class TablesBasicComponent {
 public routes=routes;
}
