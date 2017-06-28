import { AuthGuard } from './../auth/auth-guard.service';
import { MacrosHomeComponent } from './macros-home/macros-home.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'macros', component: MacrosHomeComponent, canActivate: [AuthGuard] }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class MacrosRoutingModule { }