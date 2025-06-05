import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';


@Component({
    selector: 'app-ui-avatar',
    templateUrl: './ui-avatar.component.html',
    styleUrl: './ui-avatar.component.scss',
    standalone: false
})
export class UiAvatarComponent {
  public routes = routes;
}
