import { SingleSignOnUserEntity } from './single-sign-on-user-entity';
import { IUserEntity } from './user-entity';
import { Injectable } from '@angular/core';
import { Credentials } from './credentials';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userInfo: IUserEntity;

  constructor(private readonly router: Router) { }

  public login(credentials: Credentials, redirectUrl: string) {
    localStorage.setItem('token', 'hardcoded token');
    console.log('Token has been stored to local storage', credentials);
    this.userInfo = new SingleSignOnUserEntity(1, 'Aliaksandr', 'Kasirau');
    this.router.navigateByUrl(redirectUrl);
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.userInfo = null;
    this.router.navigate([this.router.navigate(['/login'],
              {queryParams: { redirectUrl: 'courses' }})]);
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }

  public getUserInfo(): IUserEntity {
    return this.userInfo;
  }
}
