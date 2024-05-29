import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  public constructor(private oidcSecurityService: OidcSecurityService) {}

  public login(): void {
    this.oidcSecurityService.authorize();
  }

  public logout(): void {
    this.oidcSecurityService.logoff().subscribe((result) => console.log(result));;
  }

  public isAuthenticated(): Observable<boolean> {
    return this.oidcSecurityService.isAuthenticated$.pipe(
      map((authResult) => authResult.isAuthenticated)
    );
  }

  public get token(): Observable<string> {
    return this.oidcSecurityService.getAccessToken();
  }

  public getUserData() {
    return this.oidcSecurityService.userData$;
  }
}
