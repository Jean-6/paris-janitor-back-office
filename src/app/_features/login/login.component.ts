import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  loginCtrl!: FormControl;
  passwordPasswordCtrl!: FormControl;


  constructor(private formBuilder: FormBuilder) {
  }


  ngOnInit() {
    this.initLoginForm()
  }

  private initLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:['', Validators.required,Validators.email],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
  }
}
