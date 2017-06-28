import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

const now = new Date();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  totalitems: number;
  expiryFilter: string = '';
  startAt: number;

  clientItems: Observable<any[]>;

  draftFilter: Subject<any>;

  model: NgbDateStruct;
  date: { year: number, month: number };

  

  selectToday() {
    this.model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
  }

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.getArticles();
  }

  filterBy(draft: string) {
    this.draftFilter.next(draft);
  }

  getArticles() {
    this.draftFilter = new Subject();
    this.items = this.db.list('/esolhelpdesk1380528590/articles/', {
      query: {
        orderByChild: 'draft',
        equalTo: this.draftFilter
      }
    });
  }

  clientFilter(filters: any) {
    filters = [1497609791000];
    console.log(filters);
    let results = new Observable<any[]>();
    let articleRef = firebase.database().ref('/esolhelpdesk1380528590/articles/');

    for (let filter of filters) {
      articleRef.orderByChild('expiryDate').startAt(filter).on('child_added', function (snap) {
        snap.forEach(function (childSnap) {
          console.log(childSnap.val());
          return false;
        })
      })
    }

    // return this.clientItems = this.db.list('/esolhelpdesk1380528590/articles/')
    //   .map(articles => articles.filter(article => article.draft == 'true'));      
  }

}
