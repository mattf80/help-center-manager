import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        let url: string = state.url;
        let roles = route.data['roles'] as Array<string>;
        return this.authService.isAuthenticated1()
            .do(authenticated => {
                if (!authenticated) {
                    this.authService.redirectUrl = url;
                    this.router.navigate(['/login']);
                }
            });
    }
}