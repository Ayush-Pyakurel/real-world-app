import { Component, OnInit } from '@angular/core';
import { User } from '../Interface/user';

import { AuthServiceService } from '../services/auth-service.service';
import { FetchApiService } from '../services/fetch-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logedInUser: boolean = false;
  currentUser: any;

  constructor(
    private authService: AuthServiceService,
    private apiService: FetchApiService
  ) {}

  // userName: any = this.authService.getLoggedInUser();

  ngOnInit(): void {
    // this.userLogin();
    // this.signedInUser();
    // this.userName = this.authService.getLoggedInUser();
    //console.log('header', this.userName);
    // if (this.authService.getLoggedInUser()) {
    //   this.fetchedHeader();
    // }
    this.getCurrentuser();
  }

  // fetchedHeader() {
  //   this.apiService.signInUser().subscribe((user) => {
  //     this.currentuser = user.user.username;
  //     console.log(this.currentuser);
  //   });
  // }

  isLogedInUser() {
    return this.authService.loggedInUser();
  }

  userLogout() {
    this.authService.logoutUser();
  }

  getCurrentuser() {
    // if (this.authService.checkCurrentUser()) {
    this.currentUser = this.authService.getCurrentUser();
    console.log(this.currentUser);
    // }
  }

  // userLogin() {
  //   this.apiService.signInUser().subscribe((response) => {
  //     this.userName = response.user.username;
  //   });
  // }

  // signedInUser() {
  //   this.userName = this.authService.userName;
  //   console.log(this.userName);
  // }
}
