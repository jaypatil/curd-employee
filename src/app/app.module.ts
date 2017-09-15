import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { EmployeeDetailComponent } from './emp-detail.component';
import { EmployeeListComponent } from "./emp-list.component";
import { EmployeeEntryComponent } from "./emp-entry.component";

const COMPONENT = [AppComponent, EmployeeListComponent, EmployeeEntryComponent, EmployeeDetailComponent]

@NgModule({
  declarations: [ COMPONENT
    // AppComponent,
    // EmployeeDetailComponent,
    // EmployeeEntryComponent,
    // EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
