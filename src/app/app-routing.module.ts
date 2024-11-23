import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from "./features/signin/signin.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {SignupComponent} from "./features/signup/signup.component";

const routes: Routes = [
  //Default root : launch page
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  //Others root
  {path : 'signin',component:SigninComponent},
  {path : 'signup',component:SignupComponent},
  //Root for page not found
  {path : '**',redirectTo:'/signin'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  FormsModule,ReactiveFormsModule,BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
