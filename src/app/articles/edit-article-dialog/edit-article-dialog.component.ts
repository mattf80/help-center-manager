import { Article } from './../article';
import { Component, OnInit, Input, ViewChild  } from '@angular/core';
import { MdDialog, MdDialogRef, MdDatepicker } from '@angular/material'
import * as moment from 'moment';

@Component({
  selector: 'app-edit-article-dialog',
  templateUrl: './edit-article-dialog.component.html',
  styleUrls: ['./edit-article-dialog.component.css']
})
export class EditArticleDialogComponent implements OnInit {

  @Input()
  article: Article;

  @ViewChild(MdDatepicker) datepicker: MdDatepicker<Date>;

  startFrom: number = 1;
  newExpiryDate: string;
  date: moment.Moment;
  monthsToAdd: number = 6;

  constructor(public dialogRef: MdDialogRef<EditArticleDialogComponent>) { }

  ngOnInit() {
    
  }

  calcExpDate() {
    if (this.startFrom == 1) {
      this.date = moment();
    } else {
      this.date = moment(this.article.expiryDate);
    }

    this.date.add(this.monthsToAdd, 'months');
    this.newExpiryDate = this.date.toString();
  }

  confirmSelection() {
    this.dialogRef.close(this.newExpiryDate);
  }

}
