import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment/environement';
import { DesignationDetailsModel } from '../../models/designationDetails';

@Injectable({
  providedIn: 'root'
})
export class DesignationDetailsService {
  private apiUrl = environment.backend.baseURL;
  private designationUrl = this.apiUrl + 'api/Designation';

  constructor(private http: HttpClient) {}

  createDesignation(designation: DesignationDetailsModel): Observable<DesignationDetailsModel> {
    return this.http.post<DesignationDetailsModel>(this.designationUrl, designation);
  }

  getAllDesignations(): Observable<DesignationDetailsModel[]> {
    return this.http.get<DesignationDetailsModel[]>(this.designationUrl + '/all');
  }
}
