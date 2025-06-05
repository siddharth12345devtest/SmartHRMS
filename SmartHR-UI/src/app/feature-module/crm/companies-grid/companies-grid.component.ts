import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import {  apiResultFormat, breadCrumbItems, Company } from '../../../shared/models/models';
import { DataService } from '../../../shared/data/data.service';

@Component({
    selector: 'app-companies-grid',
    templateUrl: './companies-grid.component.html',
    styleUrl: './companies-grid.component.scss',
    standalone: false
})
export class CompaniesGridComponent {
  public routes = routes;
  public actualData: Company[] = [];
  breadCrumbItems: breadCrumbItems[] =[];
  constructor(
    private data: DataService,
  ) {
    this.breadCrumbItems = [
      { label: 'CRM' },
      { label: 'Companies Grid', active: true }
  ];
    this.data.getCompany().subscribe((apiRes: apiResultFormat) => {
      this.actualData = apiRes.data;
    });
  }
}
