import { FormControl } from '@angular/forms';
import { User } from './../../../auth/user';
import { Component, OnInit, Input } from '@angular/core';
import { MdOptionSelectionChange } from "@angular/material/material";

@Component({
  selector: 'app-create-task-view',
  templateUrl: './create-task-view.component.html',
  styleUrls: ['./create-task-view.component.css']
})
export class CreateTaskViewComponent implements OnInit {

  @Input()
  users: User[];

  assignee: FormControl;

  constructor() {
    this.assignee = new FormControl();
  }

  ngOnInit() {
  }

  selectUser(event: MdOptionSelectionChange, user: User) {
    if (event.source.selected) {
      console.log(user);
    }
  }

  displayFn(user: any): string {
    return user ? user.profile.displayName : user;
  }

}
