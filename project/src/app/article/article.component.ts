import { Component, OnInit } from '@angular/core';
import { Article } from '../Interface/article.interface';
import { AuthServiceService } from '../services/auth-service.service';
import { FetchApiService } from '../services/fetch-api.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  articleFeeds: any;
  articlesData: any;
  constructor(
    private authService: AuthServiceService,
    private fetService: FetchApiService
  ) {}

  ngOnInit(): void {
    this.showArticles();
    this.showArticleFeed();
  }

  showArticleFeed() {
    this.fetService.getArticleFeed().subscribe((response) => {
      //this.articleFeeds = response.articles[1];
      //console.log(this.articleFeeds);
    });
  }

  showArticles() {
    this.fetService.getArticles().subscribe((response) => {
      this.articlesData = response.articles;
      console.log(this.articlesData);
    });
  }
}
