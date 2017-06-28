import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  authenticated: Observable<boolean>;

  constructor(private authService: AuthService, private router: Router) {
    this.user = this.authService.currentUser();
    this.authenticated = this.authService.isAuthenticated1();
  }

  ngOnInit() {

  }

  login(model) {
    this.authService.login(model)
      .subscribe((user) => {
        if (user) {
          console.log("Logged in: ", user);
          this.router.navigate(['/articles']);
        } else {
          console.log("Login error")
        }
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("Done.");
      })
}

logout() {
  this.authService.logout();
}

}
