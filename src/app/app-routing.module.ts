import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpListComponent } from './features/employees/components/emp-list/emp-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full'  },
  { path: 'employees', component: EmpListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
