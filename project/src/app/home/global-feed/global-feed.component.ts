import { Component, OnInit } from '@angular/core';
import { FetchApiService } from 'src/app/services/fetch-api.service';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss']
})
export class GlobalFeedComponent implements OnInit {
  article:any;
  articleData: any;
  constructor(private service:FetchApiService) { }

  ngOnInit(): void {
    this.showArticle();
    this.showArticalGlobally()
  }
  showArticle(){
    this.service.article().subscribe((res)=>{
      this.articleData=res.articles;

      console.log(this.articleData)
    })
  }
  showArticalGlobally(){
    this.service.getRecentArticle().subscribe((res)=>{

    })
  }

}
