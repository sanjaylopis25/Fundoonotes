import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  loggedIn(){
    console.log("called")
    return !!localStorage.getItem("token")
  }
}
