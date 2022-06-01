import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FetchApiService } from '../services/fetch-api.service';

@Injectable({
  providedIn: 'root'
})
export class GetUsernameService {
currentUser:any;
  constructor(private router :Router,private apiService:FetchApiService) { }
  // getToken() {
  //   console.log('hello')
  //   return localStorage.getItem('token');
  // }
  
  setUsername(){
      this.apiService.getCurrentUser().subscribe(user=>{
          this.currentUser=user.user.username;
          console.log('uuu',this.currentUser)
      })
  }


}
