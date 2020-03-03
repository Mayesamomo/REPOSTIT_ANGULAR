import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  /* getPublicContent(): Observable<any> {
     return this.http.get(API_URL + 'all', { responseType: 'text' });
   }
 //returns all content accessible to normal users
   getUserBoard(): Observable<any> {
     return this.http.get(API_URL + 'user', { responseType: 'text' });
   }
 //returns contennt accessible only to moderator
   getModeratorBoard(): Observable<any> {
     return this.http.get(API_URL + 'mod', { responseType: 'text' });
   }
 //return admin's access 
   getAdminBoard(): Observable<any> {
     return this.http.get(API_URL + 'admin', { responseType: 'text' });
   }**/
}
