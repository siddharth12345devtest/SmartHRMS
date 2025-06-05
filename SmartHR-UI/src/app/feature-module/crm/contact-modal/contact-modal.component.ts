import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';

@Component({
    selector: 'app-contact-modal',
    templateUrl: './contact-modal.component.html',
    styleUrl: './contact-modal.component.scss',
    standalone: false
})
export class ContactModalComponent {
  public routes = routes;
  values: string[] = ['Collab', 'Promotion', 'Rated', 'Davis'];
  values1:string[]=['Vaughan Lewis'];
}
