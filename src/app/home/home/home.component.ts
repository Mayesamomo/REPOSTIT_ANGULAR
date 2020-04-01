import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Post } from 'src/app/DTO/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() selectedPost = new EventEmitter<Post>();
  public currentUser;
  post: Post[];
  errorMsg: string = null;
  selected: number;
  toastr: any;
  constructor(private postService: PostService,
    private authenticationService: AuthService,
    private router: Router) {
  }
  //onload posts are listed
  ngOnInit(): void {
    //subscribe to the service here and provide a lambda function to copy results to customers field
    this.postService.getAllPosts().subscribe(data => {
      console.log(data);
      this.post = data;
    },
      err => {
        this.toastr.error("Error = ", err.message);
        this.errorMsg = err.message
      });
  }
  postSelected(i: number) {
    console.log(i);
    this.selected = i;
    console.log(this.post[i]);
    this.selectedPost.emit(this.post[i]);
  }

}

