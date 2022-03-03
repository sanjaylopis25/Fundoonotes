import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm! : FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder, private userService:UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]],
      service: ['advance', [Validators.required]],
    });
  }
  signup(){
    if(this.registerForm.valid){
      let reqData={
        firstName:this.registerForm.value.firstName,
        lastName:this.registerForm.value.lastName,
        email:this.registerForm.value.email,
        password:this.registerForm.value.password,
        service:this.registerForm.value.service
      }
      console.log(this.registerForm.value);
      this.userService.signup(reqData).subscribe(response =>{
        console.log(response);
      },error =>{
        console.log(error);
      })  
    } 
    else{
      console.log("form is not valid fill form correctly")
      return;
    }
    
  }
}
