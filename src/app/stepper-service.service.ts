import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployeeObj } from './stepper/stepper.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepperServiceService {

  constructor(private http: HttpClient) { }

  getRoles(): Observable<any> {
   return this.http.get("https://freeapi.gerasim.in/api/EmployeeApp/GetAllRoles");
  }

  getDesignation(): Observable<any> {
    return this.http.get("https://freeapi.gerasim.in/api/EmployeeApp/GetAllDesignation");
  }

  createEmployee(employee: IEmployeeObj): Observable<any> {
    return this.http.post("https://freeapi.gerasim.in/api/EmployeeApp/CreateNewEmployee", employee);
  }
}
