import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from 'src/app/models/employee';

const url = 'api/employees/';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getById() {
    return this.http.get(`${url}`);
  }

  getAll() {
    return this.http.get(`${url}`);
  }

  getByAttr(category: string) {
    return this.http.get(`${url}/${category}`)
  }

  postEmployee(employee: Employee):Observable<Employee> {
    return this.http.post<Employee>(`${url}`+ employee, employee);
  }

   patchEmployee(employee: Employee):Observable<Employee> {
    return this.http.patch<Employee>(`${url}` + employee.id, employee);
  }
  
  putEmployee(employee: Employee):Observable<Employee> {
    return this.http.put<Employee>(`${url}`+ employee.id, employee);
  }

}
