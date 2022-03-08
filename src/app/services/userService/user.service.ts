import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
token:any;
  constructor(private httpService:HttpService) {
    this.token= localStorage.getItem("token")
   }
  signup(data:any){
    let header = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
   }
    console.log("signup called in user service",data);
    return this.httpService.postService('user/userSignUp',data,false,header)
  }

  login(data:any){
    let header = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
   }
    console.log("login called in user service",data);
    return this.httpService.postService('user/login',data,false)
  }
  forgot(data:any) {
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log("forgot called")
    return this.httpService.postService('user/reset',data,false,header)
  }
  reset(data:any,token:any) {
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':token
      })
    }
    console.log("reset called")
    return this.httpService.postService('user/reset-password',data,true,header)
  }
  
  
}
