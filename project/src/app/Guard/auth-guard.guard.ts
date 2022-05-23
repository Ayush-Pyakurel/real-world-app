import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  canActivate(): any {
    if (this.authService.loggedInUser()) {
      return true;
    } else {
      this.router.navigate(['/signin']);
      return false;
    }
  }
}
