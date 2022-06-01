import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  // templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],

 
  template:'<div class="lds-ring"><div></div><div></div><div></div><div></div></div>',
})
export class LoadingSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}