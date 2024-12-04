import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  loginCtrl!: FormControl;
  emailCtrl!: FormControl;
  passwordCtrl!: FormControl;
  confirmPasswordCtrl!: FormControl;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initSignupForm()
  }


  private initSignupForm(){
    this.signupForm = this.formBuilder.group({
      username:["", Validators.required,Validators.email],
      email:["", Validators.required,Validators.email],
      password: ["", Validators.required]
    })
  }

  onSubmit(){

  }




}
