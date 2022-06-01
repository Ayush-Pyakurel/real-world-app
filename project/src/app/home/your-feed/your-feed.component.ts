import { Component, OnInit } from '@angular/core';
import { FetchApiService } from 'src/app/services/fetch-api.service';

@Component({
  selector: 'app-your-feed',
  templateUrl: './your-feed.component.html',
  styleUrls: ['./your-feed.component.scss']
})
export class YourFeedComponent implements OnInit {
  myFeed:any;

  constructor(private fetchApi:FetchApiService) { }

  ngOnInit(): void {
    this.articleFeed();
  }
  articleFeed(){
    this.fetchApi.getArticleFeed().subscribe(res=>{
  // console.log('feed',limit)
  this.myFeed=res.articles;
  console.log('feed',this.myFeed)
    })
  }

}


