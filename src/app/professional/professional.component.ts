import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { validateForm } from 'ts-form-validation';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  profileForm!:FormGroup
  submitted=false;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.profileForm=this.formBuilder.group({
      firstName: ['', Validators.name],
    lastName: ['', Validators.name],
    address: this.formBuilder.group({
     street: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      zip: ['',Validators.required],
      email:['',Validators.email,Validators.required],
      file:['',Validators.required]
    })
  })
}
  onSubmit() {
    this.submitted=true;
    if(this.profileForm.invalid){
      return
    }
    alert("Success ")
    }
  }




//   validateFile(name: String) {
//     var ext = name.substring(name.lastIndexOf('.') + 1);
//     if (ext.toLowerCase() == 'png') {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
  

 // profileForm = new FormGroup({
  //   firstName: new FormControl('',Validators.required),
  //   lastName: new FormControl('',Validators.required),
  //   address: new FormGroup({
  //     street: new FormControl('',Validators.required),
  //     city: new FormControl('',Validators.required),
  //     state: new FormControl('',Validators.required),
  //     zip: new FormControl('',Validators.required),
  //     email: new FormControl('',Validators.required)    })
  // });
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
 

  // profileForm = this.fb.group({
  //    firstName: ['', Validators.name],
  //   lastName: ['', Validators.name],
  //   address: this.fb.group({
  //    street: ['',Validators.required],
  //     city: ['',Validators.required],
  //     state: ['',Validators.required],
  //     zip: ['',Validators.required],
  //     email:['',Validators.email]
    
  //   }),
  // });

  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  //   console.warn(this.profileForm.value);
  // }
  // constructor(private fb: FormBuilder) { }



  // ngOnInit(): void {
  // }

  
