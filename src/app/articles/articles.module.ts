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
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticlesContainerComponent } from './articles-container/articles-container.component';
import { ArticlesRefreshComponent } from './articles-refresh/articles-refresh.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { CreateTaskViewComponent } from './create-task/create-task-view/create-task-view.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    MdDatepickerModule,
    MdNativeDateModule,
    FlexLayoutModule,
    ArticlesRoutingModule,
    NgxPaginationModule,
    FormsModule
  ],
  declarations: [ArticlesHomeComponent, ArticleSearchInputComponent, ArticleSearchResultsComponent, EditArticleDialogComponent, ArticleDetailComponent, ArticlesContainerComponent, ArticlesRefreshComponent, CreateTaskComponent, CreateTaskViewComponent],
  providers: [ArticleService],
  entryComponents: [
    EditArticleDialogComponent
  ]
})
export class ArticlesModule { }
