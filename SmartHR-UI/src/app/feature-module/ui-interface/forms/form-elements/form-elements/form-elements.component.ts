import { Component } from '@angular/core';
import { routes } from '../../../../../shared/routes/routes';


@Component({
    selector: 'app-form-elements',
    templateUrl: './form-elements.component.html',
    styleUrl: './form-elements.component.scss',
    standalone: false
})
export class FormElementsComponent {
  public routes = routes;
}
