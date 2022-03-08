import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authservice/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm! : FormGroup;
  submitted=false;
  user='1';

  constructor(private formBuilder:FormBuilder, private userService:UserService, private router:Router, private authService:AuthService) {  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    localStorage.setItem("SeesionUser",this.user)
  }
  canActivate(): boolean {  
    if (!this.authService.loggedIn()) {  
        this.router.navigateByUrl("/login");  
    }  
    return this.authService.loggedIn();  
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
      console.log("login successful",response);
      localStorage.setItem("token",response.id)
      this.router.navigateByUrl('/dashboard'); 
    },error =>{
      console.log(error);
    })     
  }
  else
  console.log("form is not valid fill form correctly")
  return;
}
}
