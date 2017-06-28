import { AuthGuard } from './../auth/auth-guard.service';
import { ArticlesHomeComponent } from './articles-home/articles-home.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'articles', component: ArticlesHomeComponent, canActivate: [AuthGuard] }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class ArticlesRoutingModule { }