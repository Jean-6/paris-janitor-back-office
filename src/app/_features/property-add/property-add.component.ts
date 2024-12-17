import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-property-add',
  templateUrl: './property-add.component.html',
  styleUrl: './property-add.component.css'
})
export class PropertyAddComponent implements OnInit{


  hasMargin: boolean = true;

  currentStep=2
  steps:FormGroup[];



  constructor(private _formBuilder: FormBuilder) {

  this.steps=[
    this._formBuilder.group({
      type: new FormControl('',Validators.required),
    }),
    this._formBuilder.group({
      address: new FormControl('',Validators.required),
    }),
    this._formBuilder.group({
      area: new FormControl('',Validators.required),
      nbOfPieces: new FormControl('',Validators.required),
      nbOfBathroom: new FormControl('',Validators.required),
      nbOfWaterroom: new FormControl('',Validators.required),
      isFurnished: new FormControl('',Validators.required)
    })
  ]

  }



  ngOnInit(): void {



  }


  previousStep(){
    if(this.currentStep > 0){
      this.currentStep--;
    }

  }

  nextStep(){
    if(this.steps[this.currentStep].valid){
      this.currentStep++;
    }

  }

  submitMsForm(){

  }




}
