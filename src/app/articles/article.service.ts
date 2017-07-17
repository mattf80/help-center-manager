import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { Article, IArticle } from './article';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/filter';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

interface ItemsResponse {
  results: Array<any>;
}

@Injectable()
export class ArticleService {

  zendeskInstance: string = "esolhelpdesk1380528590";
  firebaseUrl: string = "https://us-central1-hc-db-1d9cd.cloudfunctions.net/api/articles";
  authToken: any;

  constructor(private db: AngularFireDatabase, private http: HttpClient, private authService: AuthService) { 
    this.authService.currentUser().subscribe(user => {
      user.getIdToken(true).then(token => this.authToken = token);
    });
  }

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

  getNewZendeskArticles() {
    return this.http.get<ItemsResponse>(`${this.firebaseUrl}/refresh`, {
      params: new HttpParams().set('start_time', '1488326400' ),
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.authToken)
    });
  }

  newArticleTest() {
    let article = { id: 1, title: "first article test" };
    let newArticlesRef = this.db.database.ref(`${this.zendeskInstance}/new-articles`);
    return newArticlesRef.push(article);
  }

}
