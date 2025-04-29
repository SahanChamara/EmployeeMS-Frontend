import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/employees`;

  constructor() { }

  loadEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl)
  }

  addEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.baseUrl,employee)
  }
}
