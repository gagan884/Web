import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-graduation',
  templateUrl: './graduation.component.html',
  styleUrls: ['./graduation.component.css']
})
export class GraduationComponent {
  requiredForm!: FormGroup;
   constructor(private fb: FormBuilder) {
      this.myForm();
   }
   myForm() {
    this.requiredForm = this.fb.group({
    name: ['', Validators.required ]
    });
 }

 
}
