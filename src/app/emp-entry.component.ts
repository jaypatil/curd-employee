import { AppService } from './app.service';
import { Employee } from './employee';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: 'emp-entry.component.html',
})

export class EmployeeEntryComponent implements OnInit, OnChanges {
    employee: Employee;
    employeeForm: FormGroup;

    constructor(
        private appservice: AppService,
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
    ) {
        this.createForm();
    }
    createForm() {
        this.employeeForm = this.fb.group({
            id: '',
            first_name: '',
            last_name: '',
            email: ['', [Validators.email, Validators.required]]
        })
    }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.appservice.getEmployee(+params.get('id')))
            .subscribe(emp => { this.employee = emp; this.employeeForm.reset(emp) });
    }

    addEmployee(emp: Employee) {
        this.appservice.postEmployees(emp)
            .then(e => { console.log(e); this.router.navigate(['list']) });
    }

    prepareSaveEmployee(): Employee {
        const formModel = this.employeeForm.value;
        const saveEmployee: Employee = {
            id: formModel.id,
            first_name: formModel.first_name,
            last_name: formModel.last_name,
            email: formModel.email
        };
        return saveEmployee;
    }

    ngOnChanges() {
        this.employeeForm.reset({
            id: this.employee.id,
            first_name: this.employee.first_name,
            last_name: this.employee.last_name,
            email: this.employee.email
        });
    }

    onSubmit() {
        this.employee = this.prepareSaveEmployee();
        if (this.employee && this.employee.id) {
            this.editEmployee(this.employee);
        }
        else {
            this.addEmployee(this.employee);
        }
        this.ngOnChanges();
    }

    editEmployee(emp: Employee) {
        this.appservice.putEmployees(emp)
            .then(e => { console.log(e); this.router.navigate(['list']); });
    }
}
