import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-articles-refresh',
  templateUrl: './articles-refresh.component.html',
  styleUrls: ['./articles-refresh.component.css']
})
export class ArticlesRefreshComponent implements OnInit {

  constructor() { }

  @Output()
  loadingEvent = new EventEmitter<boolean>();

  ngOnInit() {
  }

  refreshArticles(){
    this.loadingEvent.emit(true);
  }

}
