import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  forgotForm! : FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      forgotemail: ['', [Validators.required, Validators.email]],
    });
  }
  forgot(){
    this.submitted=true;
    if(this.forgotForm.valid){
      let reqData = {
        email: this.forgotForm.value.forgotemail
      }
      console.log(this.forgotForm.value);
      this.userService.forgot(reqData).subscribe(response=>{
        console.log(response);
      },error =>{
        console.log(error);
      })  
    }
    else{
      console.log("form is not valid fill form correctly");
      return;
    }
    
  }

}
