import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeEntryComponent } from './emp-entry.component';
import { EmployeeDetailComponent } from './emp-detail.component';
import { EmployeeListComponent } from './emp-list.component';

const routes: Routes = [
{ path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list',  component: EmployeeListComponent },
  { path: 'detail/:id', component: EmployeeDetailComponent },
  { path: 'add',     component: EmployeeEntryComponent },
  { path: 'edit/:id',     component: EmployeeEntryComponent },
  { path: '**', redirectTo: 'list' }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

