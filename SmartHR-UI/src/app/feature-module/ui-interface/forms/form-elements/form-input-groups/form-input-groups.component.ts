import { Component } from '@angular/core';
import { routes } from '../../../../../shared/routes/routes';


@Component({
    selector: 'app-form-input-groups',
    templateUrl: './form-input-groups.component.html',
    styleUrls: ['./form-input-groups.component.scss'],
    standalone: false
})
export class FormInputGroupsComponent {
  public routes = routes;
}
