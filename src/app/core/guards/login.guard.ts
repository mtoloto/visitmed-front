import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth/auth.service'
import { Router } from "@angular/router";
@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private auth: AuthService,
    private router: Router) {
  }

  canActivate() {

    if (!this.auth.isTokenExpired()) {
      this.router.navigate(['home']);
      return false;
    } 
    
    return true;
  }
}
