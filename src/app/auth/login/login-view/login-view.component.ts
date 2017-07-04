import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  model: FormGroup = new FormGroup({
    username: new FormControl('frowe.m@hotmail.co.uk'),
    password: new FormControl('frowem101')
  })

  @Output()
  loginEvent = new EventEmitter<any>();

  @Output()
  logoutEvent = new EventEmitter<any>();

  @Input()
  attemptingLogin: boolean = false;

  @Input()
  loginError: string;

  ngOnInit() {
  }

    onSubmit(){
    //console.log(this.model.value);
    this.loginEvent.emit(this.model.value);
  }

  login() {
    let user = { username: 'frowe.m@hotmail.co.uk', password: 'frowem101' };
    this.loginEvent.emit(user);
  }

  logout() {
    this.logoutEvent.emit();
  }

}
