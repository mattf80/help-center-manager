import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  redirectUrl: string;

  login(user) {
    let promise = this.auth.auth.signInWithEmailAndPassword(user.username, user.password);

    return Observable.from(promise);
  }

  currentUser() {
    return this.auth.authState;
  }

  isAuthenticated(roles: string[]): Observable<boolean> {
    console.log('hit');
    return this.currentUser()
      .switchMap(user => roles ?
        Observable.of(!!user && roles.indexOf(user.displayName) > -1) :
        Observable.of(!!user)
      );
  }

   isAuthenticated1(): Observable<boolean> {
    console.log('hit');
    return this.currentUser()
      .switchMap(user => Observable.of(!!user));
  }

  logout() {
    let promise = this.auth.auth.signOut();

    return Observable.from(promise);
  }


}
