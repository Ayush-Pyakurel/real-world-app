import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchApiService } from '../services/fetch-api.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article:any;
  articleData: any;
  //loading
isloading:boolean=false
  articles!: { slug: any; };
  constructor(private service:FetchApiService,private router:ActivatedRoute) { }

  ngOnInit(): void {
 
    this.articles = {
      slug: this.router.snapshot.params['slug']
    }
    this.showArticle();
    // this.showGetArticle();

  }

  showArticle(){
    this.service.article().subscribe((res)=>{
      this.articleData=res.articles;

      console.log(this.articleData)
      this.isloading=true;
    })
  }
  showGetArticle(){
    this.service.getArticle(this.articles.slug).subscribe((res:any)=>{
      console.log('slug')
    })
  }

}
