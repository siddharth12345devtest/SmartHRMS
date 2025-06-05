import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { breadCrumbItems } from '../../../../shared/models/models';

@Component({
    selector: 'app-payslip',
    templateUrl: './payslip.component.html',
    styleUrl: './payslip.component.scss',
    standalone: false
})
export class PayslipComponent {
  public routes = routes;
  initChecked = false;
  breadCrumbItems: breadCrumbItems[] =[];
  constructor(){
    this.breadCrumbItems = [
            { label: 'HR' },
            { label: 'Payslip', active: true }
        ];
  }
}
