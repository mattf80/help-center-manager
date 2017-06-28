import { SortOptions } from './../sort-options';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article-search-input',
  templateUrl: './article-search-input.component.html',
  styleUrls: ['./article-search-input.component.css']
})
export class ArticleSearchInputComponent implements OnInit {

  articles: Array<any>;
  searchTerm: string;
  sortOptions: SortOptions;

   @Output()
  searchingEvent = new EventEmitter();

  @Output()
  filteringEvent = new EventEmitter<string>();

  @Output()
  sortingEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.articles = new Array<any>();
    this.sortOptions = { term: 'title', direction: 'ascending' }
  }

  onFilterArticles(filter: string) {
    this.filteringEvent.emit(filter);
  }

  onSortArticles(sort: string) {
    this.sortingEvent.emit(sort);
  }

  search(term: string, filter: any) {
    this.searchingEvent.emit(term);
  }


}
