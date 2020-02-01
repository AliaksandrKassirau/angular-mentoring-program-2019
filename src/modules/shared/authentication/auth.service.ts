import { SingleSignOnUserEntity } from './single-sign-on-user-entity';
import { IUserEntity } from './user-entity';
import { Injectable } from '@angular/core';
import { Credentials } from './credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userInfo: IUserEntity;

  constructor() { }

  public login(credentials: Credentials) {
    localStorage.setItem('token', 'hardcoded token');
    console.log('Token has been stored to local storage', credentials);
    this.userInfo = new SingleSignOnUserEntity(1, 'Aliaksandr', 'Kasirau');
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.userInfo = null;
  }

  public isAuthenticated(): boolean {
    return !this.userInfo;
  }

  public getUserInfo(): IUserEntity {
    return this.userInfo;
  }
}
