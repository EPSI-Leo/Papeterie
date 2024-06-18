import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuthenticated: Observable<boolean>;

  constructor(
    public oidcSecurityService: OidcSecurityService,
    private authService: AuthService,
    private _router: Router
  ) {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe(() => { });
  }

  logout() {
    this.authService.logout()
      .subscribe(() => this._router.navigate(['/']))
  }

  title = 'angular_project';
}
