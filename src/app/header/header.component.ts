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

  constructor(private router: Router,
    private authenticationService: AuthService) {
  }
  ngOnInit(): void {
  }
  isLoggedIn() {
    this.authenticationService.loggedIn
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

}
