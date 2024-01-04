import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  userFormGroup! : FormGroup;
  errorMessage: any;

  constructor(private fb: FormBuilder,
           
             private router : Router){

  }

  ngOnInit(): void {
    this.userFormGroup=this.fb.group({
      username : this.fb.control("",Validators.compose([Validators.maxLength(20) ,Validators.minLength(1)])),
      password : this.fb.control("")
    })
  
  }

  handleLogin(){
    let username = this.userFormGroup.value.username;
    let password = this.userFormGroup.value.password;
    if(username=="admin@HTBS.com" && password=="admin1234"){
      this.router.navigateByUrl("/chooseFrameworks");

    }else{
      this.errorMessage = "Bad Credentials"
    }
  }
}
