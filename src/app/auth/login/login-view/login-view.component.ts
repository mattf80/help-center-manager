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
    username: new FormControl(''),
    password: new FormControl('')
  })

  @Output()
  loginEvent = new EventEmitter();

  @Output()
  logoutEvent = new EventEmitter();

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


  logout() {
    this.logoutEvent.emit();
  }

}
