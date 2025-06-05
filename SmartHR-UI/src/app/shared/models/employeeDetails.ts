export interface BasicInformationModel {
  employeePhone: string;
  email: string;
  gender: string;
  birthday: string;  // ISO string date
  address: string;
}

export interface PersonalInformationModel {
  passportNo: string;
  passportExpDate: string;  // ISO string date
  nationality: string;
  religion: string;
  maritalStatus: string;
  employementOfSpouse: string;
  numberOfChildren: number;
}

export interface EmployeeContactInformationModel {
  contactPrimary: string;
  contactSecondary: string;
}

export interface EmployeeAboutInformationModel {
  about: string;
}

export interface EmployeeBankInformationModel {
  bankName: string;
  bankAccountNumber: string;
  ifsc: string;
  branch: string;
}

export interface EmployeeFamilyInformationModel {
  name: string;
  relationship: string;
  dob: string;  // ISO string date
  familyPhone: string;
}

export interface EmployeeEducationDetailsModel {
  university: string;
  course: string;
  yop: string;  // Year of passing (string)
}

export interface EmployeeExperienceModel {
  company: string;
  designation: string;
  yoe: string;  // Years of experience (string)
}

export interface EmployeeDocumentationModel {
  fileName: string;
  contentType: string;
  fileData: string;
}

export interface EmployeeDetailsModel {
  id?: number;
  basicInformation: BasicInformationModel;
  personalInformation: PersonalInformationModel;
  contactInformation: EmployeeContactInformationModel;
  aboutInformation: EmployeeAboutInformationModel;
  bankInformation: EmployeeBankInformationModel;
  familyInformation: EmployeeFamilyInformationModel;
  educationDetails: EmployeeEducationDetailsModel;
  experience: EmployeeExperienceModel;
  documentation : EmployeeDocumentationModel;
}
