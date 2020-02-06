import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,
  RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {}

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const redirectUrl: string = state.url;
      console.log('AuthGuard#canActivate called', redirectUrl);
      return this.checkLogin(redirectUrl);
  }

  private checkLogin(url: string): boolean {
    if (this.authService.isAuthenticated()) {
      console.log('Authenticated', this.authService.isAuthenticated());
      return true;
    }
    this.router.navigate(['/login'], {queryParams: { redirectUrl: url }});
    return false;
  }
}
