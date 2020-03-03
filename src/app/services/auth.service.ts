import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Users } from '../DTO/users';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<Users>;
  public currentUser: Observable<Users>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Users>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  //return current user
  public get currentUserValue(): Users {
    return this.currentUserSubject.value;
  }
  login(email: string, password: string) {
    return this.http.post<any>(`http://localhost:8080/repostitRestServer/webresources/User/Login`, { email, password })
      .pipe(map(user => {
        if (user && user.token) {
          // store user details in local storage to keep user logged in
          localStorage.setItem('currentUser', JSON.stringify(user.result));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }
  register(user: Users) {
    return this.http.post(`http://localhost:8080/repostitRestServer/webresources/User/Register`, user);
  }

  logout() {
    // remove user data from local storage for log out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
