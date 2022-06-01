import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FetchApiService } from '../services/fetch-api.service';
import { ProfileService } from '../services/profile.service';
import { TagsService } from '../services/tags.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // tags:any;
  tags: Array<string> = [];//array of string
  userData:any;
  myFeed:any

  // valu:any
  showFeed:boolean=true;
  visible:boolean=false;

  constructor(private tagApi:TagsService,private getApi:ProfileService,private authApi:AuthService,
    private fetchApi:FetchApiService,private router:Router) { }

  ngOnInit(): void {
    this.showTags();

   

  }
showTags(){
  this.tagApi.getTags().subscribe(res=>{
    this.tags=res.tags
  // console.log('tag are',this.tags) 
})
}
onClick(){
this.showFeed=!this.showFeed
this.visible=!this.visible

}





}

