import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Profile } from '../Interface/profile';
import { User } from '../Interface/user';
import { FetchApiService } from '../services/fetch-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private userService: FetchApiService) {}
  signInUser: Profile;

  ngOnInit(): void {
    this.userProfile();
  }

  userProfile() {
    this.userService
      .userProfile()
      .pipe(map((data: { profile: Profile }) => data.profile))
      .subscribe((response) => {
        this.signInUser = response;
        // console.log(this.signInUser);
      });
  }
}
