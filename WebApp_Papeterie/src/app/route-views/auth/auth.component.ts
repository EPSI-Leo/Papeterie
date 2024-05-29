import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isAuthenticated: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.isAuthenticated.subscribe(l => console.log("logged in:", l));
  }
  ngOnInit(): void {
    this.authService.token.subscribe(t => console.log('token:', t));
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
    this.isAuthenticated.subscribe(l => console.log("logged in:", l));
  }

}
