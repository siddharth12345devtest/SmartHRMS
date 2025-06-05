import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import {  breadCrumbItems, contactList } from '../../../shared/models/models';
import { DataService } from '../../../shared/data/data.service';
interface apiResultFormat {
  data: contactList[]; // Nested array as per your console output
}
@Component({
    selector: 'app-contacts-grid',
    templateUrl: './contacts-grid.component.html',
    styleUrl: './contacts-grid.component.scss',
    standalone: false
})
export class ContactsGridComponent {
  public routes = routes;
  public actualData: contactList[] = [];
  breadCrumbItems: breadCrumbItems[] =[];
  constructor(
    private data: DataService,
  ) {
    this.breadCrumbItems = [
      { label: 'CRM' },
      { label: 'Contacts Grid', active: true }
  ];
    this.data.getContactlist().subscribe((apiRes: apiResultFormat) => {
      this.actualData = apiRes.data;
    });
  }
}
