import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  instance: string = 'esolhelpdesk1380528590';

  constructor(private db: AngularFireDatabase) { }

   getUsers(): Observable<User[]> {
    return this.db.list(`${this.instance}/users`);
  }
}

 
