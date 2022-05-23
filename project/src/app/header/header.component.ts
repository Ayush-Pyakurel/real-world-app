import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { FetchApiService } from '../services/fetch-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logedInUser: boolean = false;

  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {}

  // fetchedHeader() {
  //   this.apiServie.fetchHeader().subscribe((data) => {
  //     this.fetchedHeaderData = data;
  //     console.log(this.fetchedHeaderData);
  //   });
  // }
  isLogedInUser() {
    return this.authService.loggedInUser();
  }

  userLogout() {
    this.authService.logoutUser();
  }
}
