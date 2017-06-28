import { AuthRoutingModule } from './auth-routing-module';
import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginViewComponent } from './login/login-view/login-view.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, LoginViewComponent],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
