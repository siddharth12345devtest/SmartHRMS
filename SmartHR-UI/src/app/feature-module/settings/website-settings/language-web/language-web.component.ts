import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
    selector: 'app-language-web',
    templateUrl: './language-web.component.html',
    styleUrl: './language-web.component.scss',
    standalone: false
})
export class LanguageWebComponent {
public routes=routes;
}
