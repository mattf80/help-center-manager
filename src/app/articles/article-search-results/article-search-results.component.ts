import { ArticleService } from './../article.service';
import { EditArticleDialogComponent } from './../edit-article-dialog/edit-article-dialog.component';
import { IArticle, Article } from './../article';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-article-search-results',
  templateUrl: './article-search-results.component.html',
  styleUrls: ['./article-search-results.component.css']
})
export class ArticleSearchResultsComponent implements OnInit, OnChanges {

  constructor(public dialog: MdDialog, private articleService: ArticleService) { }

  @Input()
  articles: Article[] = [];
  p: number = 1;

  isHovered: boolean;

  newExpiryDate: number;

  @Input()
  filterBy: string;
  filteredArticles: Article[] = [];

  @Input()
  sortBy: string;
  @Input()
  sortDir: string = 'ascending';

  ngOnInit() {
  }

  getColour(article: Article) {
    if (article.status == 'Expired' || article.status == 'No expiry date!') {
      return 'red'
    } else if (article.status == 'Expiring soon') {
      return 'yellow'
    } else {
      return 'green'
    }
  }

  ngOnChanges() {
    if (this.articles) {
      this.filterArticles(this.filterBy);
      if (this.sortBy === 'Title') {
        this.filteredArticles.sort(sortByTitleAsc)
      } else if (this.sortBy === 'Author')
        this.filteredArticles.sort(sortByAuthorAsc)
    } else this.filteredArticles.sort(sortByExpiryAsc)

  }

  openArticleDialog(article: Article) {
    let dialog = this.dialog.open(EditArticleDialogComponent, {
      width: '600px'
    });
    let instance = dialog.componentInstance;
    instance.article = article;

    dialog.afterClosed()
      .subscribe(selection => {
        if (selection) {
          this.newExpiryDate = selection;
          let articleKey = article.$key;
          let epoch = new Date(this.newExpiryDate).getTime();
          this.articleService.saveExpiryDate(articleKey, epoch);
        } else {

        }
      });
  }

  filterArticles(filter: string) {
    if (filter) {
      this.filterBy = filter;
      filter = filter.toLocaleLowerCase();
      this.filteredArticles = this.articles.filter(article => {
        return article.status.toLocaleLowerCase() === filter;
      })
    } else {
      this.filteredArticles = this.articles.slice(0);
    }
  }
}

function sortByTitleAsc(a1: Article, a2: Article) {
  if (a1.title > a2.title) return 1
  else return -1;
}

function sortByAuthorAsc(a1: Article, a2: Article) {
  if (a1.user.name > a2.user.name) return 1
  else return -1;
}

function sortByExpiryAsc(a1: Article, a2: Article) {
  return a1.expiryDate - a2.expiryDate ? a2.expiryDate : 0;
}
