import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isAuthenticated: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
