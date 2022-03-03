import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  resetForm! : FormGroup;
  submitted=false;
  token:any;
  constructor(private formBuilder:FormBuilder, private userService:UserService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  reset(){
    this.submitted=true;
    if(this.resetForm.valid){
      let reqData={
        newPassword:this.resetForm.value.password
      }
      console.log(this.resetForm.value);
      this.userService.reset(reqData,this.token).subscribe((response:any)=>{
        console.log("reset called",response);
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
