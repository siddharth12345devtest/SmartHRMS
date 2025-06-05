import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';

@Component({
    selector: 'app-company-modal',
    templateUrl: './company-modal.component.html',
    styleUrl: './company-modal.component.scss',
    standalone: false
})
export class CompanyModalComponent {
  public routes=routes;
  values1: string[] = ['Collab','Promotion','Rated'];
  selectedOption2: any;
  option2 = [
    {
      id: 1,
      name: 'Darlee Robertson',
    },
    { id: 2, name: 'Sharon Roy' },
    { id: 3, name: 'Vaughan' },
    { id: 4, name: 'Jessica' },
    { id: 5, name: 'Carol Thomas' },
  ];
  removeOption2(user: any) {
    const index = this.selectedOption2.indexOf(user);
    if (index !== -1) {
      this.selectedOption2.splice(index, 1);
    }
  }
}
