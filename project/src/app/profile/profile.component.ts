import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';
import { FetchApiService } from '../services/fetch-api.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData: any;
  username: any;
  myFeed:any;
  showFeed:boolean=true;
  visible:boolean=false;

  constructor(private fetchApi: FetchApiService, private profileService: ProfileService,
    private route: ActivatedRoute,private notification:NotificationService) { }
  user!: { username: string; };

  ngOnInit(): void {

    this.user = {
      username: this.route.snapshot.params['username']

    }
    console.log('uuu', this.user.username)
    this.getProfile();
    this.getprofileInfo();
    this.getPostProfileFollow();
    this.deleteProfileFollow();
    this.articleFeed();


  }

  getProfile() {

    this.fetchApi.getCurrentUser().subscribe(res => {
      this.userData = res.user.username;
      // console.log('user',this.userData);

    },
    // (error)=>{
    //   this.notification.showError('you are not authorized')
    // }
    )


  }
  getprofileInfo() {
    console.log(this.user.username)
    this.profileService.getProfileInfo(this.user.username).subscribe((res: any) => {
      // console.log('aa', res.username)

    })
  }
  getPostProfileFollow() {
    this.profileService.postProfileFollow(this.user.username).subscribe((res:any) => {
// console.log('a',res.user.username)
    })
  }
  deleteProfileFollow(){
    this.profileService.postProfileUnfollow(this.user.username).subscribe(res=>{

    })
  }
  articleFeed(){
    this.fetchApi.getArticleFeed().subscribe(res=>{
  // console.log('feed',limit)
  this.myFeed=res.articles;
  console.log('feed',this.myFeed)
    })
  }
  onClick(){
    this.showFeed=!this.showFeed;
    this.visible=!this.visible


  }


}
