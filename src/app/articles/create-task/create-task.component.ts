import { UserService } from './../../auth/user.service';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from './../../auth/user';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  assignee: FormControl;

  users$: Observable<User[]>;
  filteredUsers: Observable<User[]>;

  constructor(private userService: UserService) { 
    this.assignee = new FormControl();
  }

  ngOnInit() {
    this.users$ = this.userService.getUsers();
    // this.filteredUsers = this.assignee.valueChanges
    //   .startWith(null)
    //   .map(user => user && typeof user === 'object' ? user.name : user)
    //   .map(name => name ? this.filter(name) : this.users$.slice());
  }

  filter(name: string) {
    // return name ? this.users.filter(user => user.name.toLowerCase().indexOf(name.toLowerCase()) === 0)
    //            : this.users;
  }

  displayFn(user: any): string {
    return user ? user.name : user;
  }

  selectUser(user: any) {
    console.log(user);
  }

}
