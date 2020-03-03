import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../DTO/post';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [];
  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8080/repostitRestServer/webresources/post/getPosts').pipe(
      tap(data => { this.posts = data; })
    );
  }

  createPost(post: Post) {
    let jsonStr = JSON.stringify(post);
    console.log(jsonStr);
    this.http.post<Post>('http://localhost:8080/repostitRestServer/webresources/post/makePost', jsonStr).subscribe(data => {
      this.posts.push(data);
    },
      err => console.log("Error!, can't make post", err));
  }

}
