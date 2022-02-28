import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  forgotForm! : FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      fogotemail: ['', [Validators.required, Validators.email]],
    });
  }
  forgot(){
    if(this.forgotForm.valid){
      console.log(this.forgotForm.value);
    }
    else
    console.log("form is not valid fill form correctly")
  }

}
