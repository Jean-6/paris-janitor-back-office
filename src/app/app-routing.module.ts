import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {SignupComponent} from "./_features/signup/signup.component";
import {LoginComponent} from "./_features/login/login.component";
import {PasswordComponent} from "./_features/password/password.component";
import {DashboardComponent} from "./_features/dashboard/dashboard.component";
import {PropertyListComponent} from "./_features/property-list/property-list.component";
import {PropertyAddComponent} from "./_features/property-add/property-add.component";
import {AuthGuard} from "./_guards/auth.guard";

const routes: Routes = [
  //Default root : launch page
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  //Others root
  {
    path : 'login',
    component:LoginComponent},
  {
    path : 'signup',
    component:SignupComponent},
  {
    path : 'password',
    component:PasswordComponent},
  {
    path : 'dashboard',
    component:DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path : 'property-list',
    component:PropertyListComponent
  },
  {
    path : 'property-add',
    component:PropertyAddComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  FormsModule,ReactiveFormsModule,BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
