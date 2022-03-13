import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate,Router,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/authservice/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  constructor(private authguardService:AuthService, private router:Router){}
  canActivate():boolean{
    if (!this.authguardService.loggedIn()){
      this.router.navigate(["/login"]);
    }
    return this.authguardService.loggedIn();
  }
}
