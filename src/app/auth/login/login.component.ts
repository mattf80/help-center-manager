import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  template: `
      <div fxLayout fxLayoutAlign="center center">
        <div fxFlex="25%" fxFlex.lt-sm="100%" fxFlex.lt-md="75%" fxFlex.lt-lg="50%">
          <app-login-view (loginEvent)="login($event)" (logoutEvent)="logout($event)" 
          [attemptingLogin]="attemptingLogin" [loginError]="loginError"></app-login-view>
        </div> 
      </div>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  authenticated: Observable<boolean>;
  attemptingLogin: boolean;
  loginError: string;

  constructor(private authService: AuthService, private router: Router, public loginValidationBar: MdSnackBar) {
    this.user = this.authService.currentUser();
    this.authenticated = this.authService.isAuthenticated1();
  }

  ngOnInit() {

  }

  login(model) {
    this.attemptingLogin = true;
    this.authService.login(model)
      .delay(2000)
      .subscribe((user) => {
        if (user) {
          this.loginError = null;
          this.router.navigate(['/']).then(() => {
            this.loginValidationBar.open("You are logged in", "Ok", {
              duration: 3000,
            });
          })
        } else {
          this.loginError = "Unable to log you in, please try again."
        }
      },
      (err) => {
        this.loginError = err.message;
        this.attemptingLogin = false;
      },
      () => {
        this.attemptingLogin = false;
      })
  }

  logout() {
    this.authService.logout();
  }

}
