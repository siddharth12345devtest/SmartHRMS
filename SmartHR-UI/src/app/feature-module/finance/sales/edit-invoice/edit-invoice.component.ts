import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
    selector: 'app-edit-invoice',
    templateUrl: './edit-invoice.component.html',
    styleUrl: './edit-invoice.component.scss',
    standalone: false
})
export class EditInvoiceComponent {
  routes= routes
  public password: boolean[] = [false,false,false,false];
  togglePassword(index: number) {
    this.password[index] = !this.password[index];
  }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    formData: any[] = []; // Initialize with an empty object to start with one row

    addNewRow() {
      this.formData.push({});
    }

    removeRow(index: number) {
        this.formData.splice(index, 1);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    trackByIndex(index: number, item: any) {
      return index;
    }
}
