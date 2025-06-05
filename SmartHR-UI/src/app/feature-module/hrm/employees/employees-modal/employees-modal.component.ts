import { Component, OnDestroy, OnInit } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { Editor, Toolbar } from 'ngx-editor';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeDetailsService } from '../../../../shared/services/employee/employee-details.service';
import { EmployeeDetailsModel } from '../../../../shared/models/employeeDetails';

@Component({
    selector: 'app-employees-modal',
    templateUrl: './employees-modal.component.html',
    styleUrl: './employees-modal.component.scss',
    standalone: false
})
export class EmployeesModalComponent implements OnInit{
  // Add Employee
  employeeForm!: FormGroup;
  loading = false;
  errorMessage = '';

  constructor(private fb:FormBuilder, private employeedetailService:EmployeeDetailsService)
  {

  }

  values: string[] = ['Jerald', 'Andrew', 'Philip', 'Davis'];
  values2: string[] = ['Hendry', 'James'];
  values3: string[] = ['Dwight'];
  dropdownOpen = false;
  public routes = routes;
  selectedTime: Date = new Date();
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic', 'format_clear'],
    ['underline', 'strike'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['image'],
  ];

  // form = new FormGroup({
  //   editorContent: new FormControl('', Validators.required()),
  // });
  selectedFieldSet: number[] = [0];
  selectedFieldSet2: number[] = [0];
  isOpen = false
  openSuccessModal() {
    this.isOpen = !this.isOpen;
  }

  nextStep() {
    if (this.selectedFieldSet[0] < 13) {
      this.selectedFieldSet[0]++;
    }
  }
  previousStep() {
    if (this.selectedFieldSet[0] > 0) {
      // Move to the previous step
      this.selectedFieldSet[0]--;
    }
  }
  nextStep2() {
    if (this.selectedFieldSet2[0] < 13) {
      this.selectedFieldSet2[0]++;
    }
  }
  previousStep2() {
    if (this.selectedFieldSet2[0] > 0) {
      // Move to the previous step
      this.selectedFieldSet2[0]--;
    }
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
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      basicInformation: this.fb.group({
        employeePhone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        gender: ['', Validators.required],
        birthday: ['', Validators.required],
        address: ['', Validators.required],
      }),
      personalInformation: this.fb.group({
        passportNo: [''],
        passportExpDate: [''],
        nationality: [''],
        religion: [''],
        maritalStatus: [''],
        employementOfSpouse: [''],
        numberOfChildren: [0],
      }),
      contactInformation: this.fb.group({
        contactPrimary: [''],
        contactSecondary: [''],
      }),
      aboutInformation: this.fb.group({
        about: [''],
      }),
      bankInformation: this.fb.group({
        bankName: [''],
        bankAccountNumber: [''],
        ifsc: [''],
        branch: [''],
      }),
      familyInformation: this.fb.group({
        name: [''],
        relationship: [''],
        dob: [''],
        familyPhone: [''],
      }),
      educationDetails: this.fb.group({
        university: [''],
        course: [''],
        yop: [''],
      }),
      experience: this.fb.group({
        company: [''],
        designation: [''],
        yoe: [''],
      }),
      documentation: this.fb.group({
        fileName: [''],
        contentType: [''],
        fileData: [''],
      })
    });
    this.editor = new Editor();
  }

  onSubmit(): void {
    if (this.employeeForm.invalid) {
      this.errorMessage = 'Please fill all required fields correctly.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    const employeeData: EmployeeDetailsModel = this.employeeForm.value;

    this.employeedetailService.createEmployee(employeeData).subscribe({
      next: (res) => {
        this.loading = false;
        alert('Employee saved successfully!');
        this.employeeForm.reset();
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = 'Failed to save employee data.';
        console.error(err);
      }
    });

  // ngOnDestroy(): void {
  //   this.isOpen = false
  //   this.editor.destroy();
  // }

  // public password: boolean[] = [false,false,false,false];

  // togglePassword(index: number) {
  //   this.password[index] = !this.password[index];
  // }
 }
}