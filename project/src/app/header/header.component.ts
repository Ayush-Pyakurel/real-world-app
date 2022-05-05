import { Component, OnInit } from '@angular/core';
import { FetchApiService } from '../services/fetch-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  fetchedHeaderData!: any;

  constructor(private apiServie: FetchApiService) {}

  ngOnInit(): void {}

  // fetchedHeader() {
  //   this.apiServie.fetchHeader().subscribe((data) => {
  //     this.fetchedHeaderData = data;
  //     console.log(this.fetchedHeaderData);
  //   });
  // }
}
