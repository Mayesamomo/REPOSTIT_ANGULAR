import { Injectable } from '@angular/core';
import { withModule } from '@angular/core/testing';
import { Users } from '../DTO/users';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {

  constructor() { }
  //clears token on signout
  signout() {
    window.sessionStorage.clear();
  }
  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
  }
  public saveUser(user: Users) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
}
