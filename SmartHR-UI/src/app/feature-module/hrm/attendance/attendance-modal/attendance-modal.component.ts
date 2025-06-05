import { Component, HostListener, ViewChild } from '@angular/core';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
    selector: 'app-attendance-modal',
    templateUrl: './attendance-modal.component.html',
    styleUrl: './attendance-modal.component.scss',
    standalone: false
})
export class AttendanceModalComponent {
  selectedTime: Date = new Date(); 
  dropdownOpen = false;
  dropdownOpen1 = false;
  dropdownOpen2 = false;
  time: Date[] | undefined;
  @ViewChild(BsDatepickerDirective, { static: false })
  datepicker?: BsDatepickerDirective;
  @HostListener('window:scroll')
  onScrollEvent() {
    this.datepicker?.hide();
  }
  // Open the dropdown
  openDropdown() {
    this.dropdownOpen = true;
  }

  // Close the dropdown
  closeDropdown() {
    this.dropdownOpen = false;
  }

  // Update displayed time when selection changes
  onTimeChange() {
    this.closeDropdown(); // Close dropdown after time selection
  }
   // Open the dropdown
   openDropdown1() {
    this.dropdownOpen1 = true;
  }

  // Close the dropdown
  closeDropdown1() {
    this.dropdownOpen1 = false;
  }

  // Update displayed time when selection changes
  onTimeChange1() {
    this.closeDropdown1(); // Close dropdown after time selection
  }

     // Open the dropdown
     openDropdown2() {
      this.dropdownOpen2 = true;
    }
  
    // Close the dropdown
    closeDropdown2() {
      this.dropdownOpen2 = false;
    }
  
    // Update displayed time when selection changes
    onTimeChange2() {
      this.closeDropdown2(); // Close dropdown after time selection
    }

}
