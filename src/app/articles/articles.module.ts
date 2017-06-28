import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleService } from './article.service';
import { MaterialModule, MdNativeDateModule, MdDatepickerModule } from '@angular/material';
import { ArticlesRoutingModule } from './articles-routing-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesHomeComponent } from './articles-home/articles-home.component';
import { ArticleSearchInputComponent } from './article-search-input/article-search-input.component';
import { ArticleSearchResultsComponent } from './article-search-results/article-search-results.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditArticleDialogComponent } from './edit-article-dialog/edit-article-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MdDatepickerModule,
    MdNativeDateModule,
    FlexLayoutModule,
    ArticlesRoutingModule,
    NgxPaginationModule,
    FormsModule
  ],
  declarations: [ArticlesHomeComponent, ArticleSearchInputComponent, ArticleSearchResultsComponent, EditArticleDialogComponent],
  providers: [ArticleService],
  entryComponents: [
    EditArticleDialogComponent
  ]
})
export class ArticlesModule { }
