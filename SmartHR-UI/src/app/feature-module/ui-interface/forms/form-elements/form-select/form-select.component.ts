import { Component } from '@angular/core';
import { routes } from '../../../../../shared/routes/routes';


@Component({
    selector: 'app-form-select',
    templateUrl: './form-select.component.html',
    styleUrl: './form-select.component.scss',
    standalone: false
})
export class FormSelectComponent {
  public routes = routes;
}
