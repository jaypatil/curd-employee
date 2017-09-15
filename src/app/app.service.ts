import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Employee } from "./employee";


@Injectable()
export class AppService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private employeesUrl = 'http://localhost:3000/employees';  // URL to web api

    constructor(private http: Http) { }

    //getEmployees(): Promise<Employee[]> {
    getEmployees(): Promise<Array<Employee>> {
        return this.http.get(this.employeesUrl)
            .toPromise()
            .then(response => response.json() as Array<Employee>)
            .catch(this.handleError);
    }
    getEmployee(id: number): Promise<Employee> {
        return this.http.get(this.employeesUrl + '/' + id)
            .toPromise()
            .then(response => response.json() as Employee)
            .catch(this.handleError);
    }
    postEmployees(employee: Employee): Promise<any> {
        return this.http.post(this.employeesUrl, employee)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    putEmployees(employee: Employee): Promise<any> {
        return this.http.put(this.employeesUrl +'/'+ employee.id, employee)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    patchEmployees(employee: Employee): Promise<any> {
        return this.http.patch(this.employeesUrl + '/${employee.id}', employee)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    deleteEmployees(id: number): Promise<any> {
        return this.http.delete(this.employeesUrl + '/' + id)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
