import { Observable } from 'rxjs/Observable';
import { Article, IArticle } from './article';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/filter';

@Injectable()
export class ArticleService {

  zendeskInstance: string = "esolhelpdesk1380528590";

  constructor(private db: AngularFireDatabase) { }

  getAllArticles(): Observable<Article[]> {
    return this.db.list('esolhelpdesk1380528590/articles')
      .map(Article.fromJsonList)
  }

  getArticle(id: number): Observable<Article> {
    return this.db.list('esolhelpdesk1380528590/articles/', {
      query: {
        orderByChild: 'id',
        equalTo: id
      }
    })
      .map(results => results[0])
      .map(Article.fromJson);
  }

  saveExpiryDate(articleKey: string, newExpiryDate: number) {
    return this.db.object(`${this.zendeskInstance}/articles/` + articleKey).update({ expiryDate: newExpiryDate });
  }

  newArticleTest() {
    let article = { id: 1, title: "first article test" };
    let newArticlesRef = this.db.database.ref(`${this.zendeskInstance}/new-articles`);
    return newArticlesRef.push(article);
  }

}
