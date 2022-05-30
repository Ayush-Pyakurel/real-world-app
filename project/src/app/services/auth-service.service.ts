//import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

import { FetchApiService } from './fetch-api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(
    private router: Router,
    private apiService: FetchApiService,
    private toaster: NgToastService
  ) {}

  //userName: User;
  signInUser: any;

  getToken() {
    return localStorage.getItem('token');
  }

  getCurrentUser() {
    return localStorage.getItem('currentUser');
  }

  getLoggedInUser() {
    return (this.signInUser = {
      username: localStorage.getItem('currentUser'),
      bio: localStorage.getItem('bio'),
      image: localStorage.getItem('image'),
      email: localStorage.getItem('email'),
    });
  }

  // setLoggedInUser(name: any) {
  //   this.userName.username = name;
  //   console.log('set', name);
  // }
  // getLoggedInUser() {
  //   return this.userName.username;
  // }

  //  setUser(current_user: any) {
  //   localStorage.setItem('current_user', current_user);
  // }

  loggedInUser() {
    //converting available token to boolean so that we can use it for authentication and authorizaton
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    this.toaster.info({
      detail: 'Logout Successful',
      summary: `Bye-Bye ${localStorage.getItem('currentUser')}`,
      duration: 4000,
    });
    // localStorage.removeItem('currentUser');
    localStorage.clear();
    this.router.navigate(['/signin']);
  }

  checkCurrentUser() {
    return !!localStorage.getItem('currentUser');
  }

  // noInterceptor() {
  //   return
  // }
}
