import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
    selector: 'app-add-language',
    templateUrl: './add-language.component.html',
    styleUrl: './add-language.component.scss',
    standalone: false
})
export class AddLanguageComponent {
public routes=routes;
}
