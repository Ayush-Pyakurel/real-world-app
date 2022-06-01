import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
 
  constructor(private authservice:AuthService, private router: Router){}
  
  canActivate():boolean{
    if(this.authservice.getToken()){
return true;
    }
    else{
      this.router.navigate(['/getProfile'])
      return false;
    }
  }
    

}

