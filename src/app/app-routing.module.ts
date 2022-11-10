import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';

import { GraduationComponent } from './graduation/graduation.component';
import { HomeComponent } from './home/home.component';
import { ProfessionalComponent } from './professional/professional.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },   
  { path: 'dashboard', component: DashboardComponent },    
  { path: 'aboutus', component: AboutComponent },    
  { path: 'contact', component: ContactComponent },
  { path: 'graduation', component: GraduationComponent }, 
  { path: 'professional', component: ProfessionalComponent }, 
  { path: 'services', component: ServicesComponent}, 
 { path: 'home', component: HomeComponent},
 {path: 'employee', component: EmployeeComponent}, 

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
