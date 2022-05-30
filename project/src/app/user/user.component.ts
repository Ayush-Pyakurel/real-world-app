import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../Interface/user';
import { AuthServiceService } from '../services/auth-service.service';
import { FetchApiService } from '../services/fetch-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userName = new EventEmitter();
  userData: User;

  constructor(
    private apiService: FetchApiService //  private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    this.fetcheRegisterdUserDetail();
  }

  fetcheRegisterdUserDetail() {
    this.apiService.signInUser().subscribe((data) => {
      this.userData = data;
      // console.log(this.userData);
      // this.authService.setUser(this.userData);
      // console.log(this.userData);
      //console.log(this.userData);
      // console.log(this.userData.user.token);
      // localStorage.setItem('token', this.userData.token);
      // console.log('hi');
    });
  }

  // setCurrentUser() {}
}
