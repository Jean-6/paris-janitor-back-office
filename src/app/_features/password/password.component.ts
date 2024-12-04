import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent implements OnInit{

  passwordForm!: FormGroup;
  emailCtrl!: FormControl;

  constructor(private formBuilder: FormBuilder) {
  }



  ngOnInit(): void {
    this.initPasswordForm()
  }

  private initPasswordForm(){
    this.passwordForm = this.formBuilder.group({
      email:['', Validators.required,Validators.email]
    })
  }

  onSubmit(){}


}
