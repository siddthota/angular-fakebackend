import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(protected router: Router, protected authService: AuthService) { }

  canActivate(route, state: RouterStateSnapshot) {
    if(this.authService.isLoggedIn()) return true;

    this.router.navigate(['/'], {queryParams: {returnUrl: state.root.url}});
    return false;
  }

}
