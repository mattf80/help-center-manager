import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any;

  constructor(private authService: AuthService, private router: Router) {
    this.user = this.authService.currentUser();
   }

  ngOnInit() {
  }

  navigation = [
    { link: 'home', label: 'Home' },
    { link: 'articles', label: 'Articles' },
    { link: 'macros', label: 'Macros' }
  ];

  logout() {
    this.authService.logout()
      .delay(1000)
      .subscribe(() => {
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
      })
  }

}
