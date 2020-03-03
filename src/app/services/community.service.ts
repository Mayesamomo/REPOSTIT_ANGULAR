import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Community } from '../DTO/community';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  community: Community[] = [];
  constructor(private http: HttpClient) { }
  getAllCommunities(): Observable<Community[]> {
    return this.http.get<Community[]>('http://localhost:8080/repostitRestServer/webresources/community/getAllCommunitys').pipe(
      tap(data => { this.community = data; })
    );
  }

  createPost(com: Community) {
    let jsonStr = JSON.stringify(com);
    console.log(jsonStr);
    this.http.post<Community>('http://localhost:8080/repostitRestServer/webresources/community/CreateCommunity', jsonStr).subscribe(data => {
      this.community.push(data);
    },
      err => console.log("Error!, can't make post", err));
  }
}
