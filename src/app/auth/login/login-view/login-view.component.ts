import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  constructor() { }

  @Output()
  loginEvent = new EventEmitter<any>();

  @Output()
  logoutEvent = new EventEmitter<any>();

  ngOnInit() {
  }

  login() {
    let user = { username: 'frowe.m@hotmail.co.uk', password: 'frowem101' };
    this.loginEvent.emit(user);
  }

  logout() {
    this.logoutEvent.emit();
  }

}
