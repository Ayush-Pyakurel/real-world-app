import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FetchApiService } from '../services/fetch-api.service';
import { ProfileService } from '../services/profile.service';
import { GetUsernameService } from './getUsername.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  fetchedHeaderData!: any;
  user:any;
  currentUser:any;
  constructor(private authservice:ProfileService, private api:GetUsernameService,private apiService:FetchApiService) {}

  ngOnInit(): void {
    this.loggedInUser()
    this.getName()
  }
  loggedInUser(){
  return this.apiService.loggedInCheck();
  }
  getName(){
    this.apiService.getCurrentUser().subscribe(userName=>{
      this.currentUser=userName.user.username;
      
  })
}


}


