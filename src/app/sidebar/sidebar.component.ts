import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommunityService } from '../services/community.service';
import { Router } from '@angular/router';
import { Community } from '../DTO/community';
import { Post } from '../DTO/post';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() selectedPost = new EventEmitter<Post>();
  public currentUser;
  communities: Community[];
  errorMsg: string = null;
  selected: number;
  constructor(
    private comService: CommunityService,
    private router: Router,
  ) {
    this.currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : '';
  }

  ngOnInit(): void {
    //subscribe to the service here and provide a lambda function to copy results to customers field
    this.comService.getAllCommunities().subscribe(data => {
      console.log(data);
      this.communities = data;
    },
      err => {
        this.errorMsg = err.message
      });
  }

}
