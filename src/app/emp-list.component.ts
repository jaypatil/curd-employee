import { AppService } from "./app.service";
import { Employee } from "./employee";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: 'emp-list.component.html',
})

export class EmployeeListComponent implements OnInit {
    employees: Array<Employee>;
    constructor(
        private router: Router,
        private appService: AppService
    ) { }

    ngOnInit(): void {
        this.showEmployees();
    }

    showEmployees() {
        this.appService.getEmployees()
            .then(e => this.employees = e);
    }

    deleteEmployee(id: number) {
        this.appService.deleteEmployees(id)
            .then(e => { console.log(e); this.showEmployees(); });
    }

    gotoDetail(id: number): void {
        this.router.navigate(['detail', id]);
    }

    editEmployee(id: number): void {
        this.router.navigate(['edit', id]);
    }
}