import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeDetailsModel } from '../../models/employeeDetails';
import { environment } from '../../../../environment/environement';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {
  // private apiUrl = "https://localhost:7037/api/Employee/";
  private apiUrl = environment.backend.baseURL;
  private employeeUrl = this.apiUrl + "api/Employee";
  constructor(private http: HttpClient) { }

  createEmployee(employee: EmployeeDetailsModel): Observable<EmployeeDetailsModel> {
    return this.http.post<EmployeeDetailsModel>(this.employeeUrl, employee);
  }

  getAllEmployees(): Observable<EmployeeDetailsModel[]> {
    return this.http.get<EmployeeDetailsModel[]>(this.employeeUrl + "/all");
  }
}
