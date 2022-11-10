import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  title = 'login1';
  submitted=false;
  constructor(private formBuilder:FormBuilder){ }
  ngOnInit(){
   this.loginForm=this.formBuilder.group({
    email:['',Validators.required],
    password:['',Validators.required]
   })
    
  }
}
