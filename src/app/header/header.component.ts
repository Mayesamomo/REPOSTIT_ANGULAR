import { Component, OnInit } from '@angular/core';
import { Users } from '../DTO/users';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: Users;
  constructor(private router: Router,
    private authenticationService: AuthService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  ngOnInit(): void {
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
