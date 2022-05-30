import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FetchApiService } from 'src/app/services/fetch-api.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  constructor(private fetchService: FetchApiService) {}

  newArticleForm: FormGroup;

  ngOnInit(): void {
    this.newArticleForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      body: new FormControl(null, [Validators.required]),
      // tagList: new FormControl(null),
    });

    //this.showArticleFeed();
  }

  createNewArticle() {
    let params = {
      article: {
        title: this.newArticleForm.get('title')?.value,
        description: this.newArticleForm.get('description')?.value,
        body: this.newArticleForm.get('body')?.value,
        // tagList: [this.newArticleForm.get('tagList')?.value],
      },
    };

    this.fetchService.postNewArticles(params).subscribe((response) => {
      console.log(response.articles);
      console.log(params);
    });
  }

  showArticleFeed() {
    this.fetchService.getArticleFeed().subscribe((response) => {
      //this.articleFeeds = response.articles[1];
      //console.log(this.articleFeeds);
      //console.log(response);
      console.log(response);
    });
  }

  onSubmit() {
    this.createNewArticle();
  }
}
