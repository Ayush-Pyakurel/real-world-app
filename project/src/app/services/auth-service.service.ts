import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private router: Router) {}

  getToken() {
    return localStorage.getItem('token');
  }

  loggedInUser() {
    //converting available token to boolean so that we can use it for authentication and authorizaton
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }
}
