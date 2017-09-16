import { AppService } from './app.service';
import { Employee } from './employee';
import { OnInit, Component } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from '@angular/common';

@Component({
    templateUrl: 'emp-detail.component.html'
})

export class EmployeeDetailComponent implements OnInit {
    employee: Employee;

    constructor(
        private appservice: AppService,
        private route: ActivatedRoute,
        private location: Location,
    ) { }
    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.appservice.getEmployee(+params.get('id')))
            .subscribe(emp => this.employee = emp);
    }
}