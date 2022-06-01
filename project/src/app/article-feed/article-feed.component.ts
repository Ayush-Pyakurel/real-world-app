import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FetchApiService } from '../services/fetch-api.service';

@Component({
  selector: 'app-article-feed',
  templateUrl: './article-feed.component.html',
  styleUrls: ['./article-feed.component.scss']
})
export class ArticleFeedComponent implements OnInit {
  publishArticle!: FormGroup;
  articles: any;
  limit=[20];
  offset=[0];
  myFeed:any;

  constructor(private apiservice:FetchApiService) { }

  ngOnInit(): void {
  //  this.showArticle();
    
this.publishArticle=new FormGroup({
  title:new FormControl('',[Validators.required]),
  description:new FormControl('',[Validators.required]),
  body:new FormControl('',[Validators.required]),
  tagList:new FormControl('',[Validators.required]),
})


  }
  onPublish(){
    let param={
      article:{
        title:this.publishArticle.get('title')?.value,
        description:this.publishArticle.get('description')?.value,
        body:this.publishArticle.get('body')?.value,
        tagList:this.publishArticle.get('tagList')?.value,
      },

    };
    this.apiservice.postArticle(param).subscribe(res=>{

    })
  }
// showArticle(){
//   this.apiservice.getArticle(this.articles.slug).subscribe(res=>{
//     console.log('ss',this.limit)

//   })
// }

 

}


