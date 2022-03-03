import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm! : FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder, private userService:UserService) {  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


login(){
  if(this.loginForm.valid){
    let reqData={
      email:this.loginForm.value.email,
      password:this.loginForm.value.password
    }
    console.log(this.loginForm.value);
    // this.userService.login(reqData).subscribe((Response))
    // console.log(Response)
    this.userService.login(reqData).subscribe((response:any) =>{
      console.log(response);
      localStorage.setItem("token",response.id)
    },error =>{
      console.log(error);
    })     
  }
  else
  console.log("form is not valid fill form correctly")
  return;
}
}
