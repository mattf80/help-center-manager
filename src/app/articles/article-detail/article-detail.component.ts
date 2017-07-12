import { ArticleService } from './../article.service';
import { Component, OnInit } from '@angular/core';
import { Article } from './../article';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})

export class ArticleDetailComponent implements OnInit {

  article: Article;

  constructor(private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    const articleId = this.activatedRoute.snapshot.params['id'];
    this.articleService.getArticle(+articleId)
      .subscribe(article => {
        this.article = article;
      });
  }

  testPush() {
    this.articleService.newArticleTest().then(result => {
      console.log(result);
    })
  }

}
