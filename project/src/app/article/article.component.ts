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
  isLoading: boolean = false;
  constructor(
    private authService: AuthServiceService,
    private fetchService: FetchApiService
  ) {}

  ngOnInit(): void {
    this.showArticles();
  }

  showArticles() {
    this.fetchService.getArticles().subscribe((response) => {
      this.articlesData = response.articles;
      //console.log(this.articlesData);
      this.isLoading = true;
    });
  }
}
