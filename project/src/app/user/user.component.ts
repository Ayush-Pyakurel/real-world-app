import { Component, OnInit } from '@angular/core';
import { FetchApiService } from '../services/fetch-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userData!: any;

  constructor(private apiService: FetchApiService) {}

  ngOnInit(): void {
    this.fetcheRegisterdUserDetail();
  }

  fetcheRegisterdUserDetail() {
    this.apiService.signInUser().subscribe((data) => {
      this.userData = data;
      //console.log(this.userData);
      // console.log(this.userData.user.token);
      // localStorage.setItem('token', this.userData.token);
      // console.log('hi');
    });
  }
}
