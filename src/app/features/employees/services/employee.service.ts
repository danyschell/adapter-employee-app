import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee, EmployeeAdapter } from "../models/employee.model";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  endpoint: string = `${environment.apiUrl}/employeeController.php`; 

  constructor(
    private _http: HttpClient,
    private _adapter: EmployeeAdapter
  ) {}

  getEmployeeList(): Observable<Employee[]> {
    // return this._http.get<Employee[]>(this.endpoint);
    return this._http.get<Employee[]>(this.endpoint).pipe(
      map((data: any[]) => data.map(item => this._adapter.adapt(item)))
    );
  }

  getEmployeeX(id: number): Observable<Employee> {
    const url = `${this.endpoint}/${id}`;
    return this._http.get<Employee>(url);
  }

  addEmployee(data: any): Observable<any> {
    return this._http.post(this.endpoint, data);
  }

  updateEmployee(id: number, data: Employee): Observable<Employee> { 
    const url = `${this.endpoint}/${id}`;
    return this._http.put<Employee>(url, data);
  }

  deleteEmployee(id: number): Observable<any> {
    const url = `${this.endpoint}/${id}`;
    return this._http.delete(url);
  }
}
