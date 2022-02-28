import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  resetForm! : FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  reset(){
    if(this.resetForm.valid){
      console.log(this.resetForm.value);
    }
    else
    console.log("form is not valid fill form correctly")
  }
}
