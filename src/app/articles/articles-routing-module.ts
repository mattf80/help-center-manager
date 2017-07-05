import { ArticlesContainerComponent } from './articles-container/articles-container.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AuthGuard } from './../auth/auth-guard.service';
import { ArticlesHomeComponent } from './articles-home/articles-home.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'articles', component: ArticlesContainerComponent, canActivate: [AuthGuard], children: [
        {
            path: ':id', component: ArticleDetailComponent
        },
        {
            path: '', component: ArticlesHomeComponent
        }
    ] }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class ArticlesRoutingModule { }