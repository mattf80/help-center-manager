import { ArticleService } from './../article.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IArticle, Article } from './../article';

import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-articles-home',
  templateUrl: './articles-home.component.html',
  styleUrls: ['./articles-home.component.css']
})
export class ArticlesHomeComponent implements OnInit, OnDestroy {

  constructor(private articleService: ArticleService, private router: Router) { }

  private ngUnsubscribe: Subject<void> = new Subject<void>();
  loading: boolean = false;
  articles: Observable<IArticle[]>;
  newArticles: any[];

  @Input()
  private searchTerm = new Subject<string>();

  @Input()
  filterBy: boolean;

  sortBy: string;

  ngOnInit() {
    //this.advancedFilter();
    this.articles = this.articleService.getAllArticles();
  }

  search(term: string) {
    this.searchTerm.next(term);
  }

  sort(sort: string) {
    this.sortBy = sort;
  }

  filter(filter: boolean) {
    this.filterBy = filter;
    console.log(this.filterBy);
  }

  selectArticle(article: Article) {
    console.log(article.id);
    this.router.navigate(['/articles', article.id]);
  }

  loadNewArticles() {
    this.loading = true;
    this.articleService.getNewZendeskArticles()
      .subscribe((data) => {
        this.newArticles = data.results;
        console.log(`Found ${this.newArticles.length} new articles.`);
      },
      (err) => console.log(err),
      () => this.loading = false);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();

  }

  // advancedFilter() {
  //   this.articles = this.searchTerm
  //     .debounceTime(300)        // wait 300ms after each keystroke before considering the term
  //     .distinctUntilChanged()   // ignore if next search term is same as previous
  //     .switchMap(term => term   // switch to new observable each time the term changes
  //       // return the http search observable
  //       ? this.articleService.search(term)
  //       // or the observable of empty heroes if there was no search term
  //       : Observable.of<IArticle[]>([]))
  //     .catch(error => {
  //       // TODO: add real error handling
  //       console.log(error);
  //       return Observable.of<IArticle[]>([]);
  //     });
  // }

}
