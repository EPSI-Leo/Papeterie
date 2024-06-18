import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable, map } from 'rxjs';
import { UserInfo } from '../model/auth/userInfo';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  public constructor(private oidcSecurityService: OidcSecurityService) { }

  public login(): void {
    this.oidcSecurityService.authorize();
  }

  public logout(): Observable<any> {
    return this.oidcSecurityService.logoff();
  }

  public isAuthenticated(): Observable<boolean> {
    return this.oidcSecurityService.isAuthenticated$.pipe(
      map((authResult) => authResult.isAuthenticated)
    );
  }

  public hasRole(role: string): Observable<boolean> {
    return this.oidcSecurityService.userData$.pipe(
      map(data => (data?.userData as UserInfo)?.roles?.includes(role) ?? false)
    );
  }

  public get token(): Observable<string> {
    return this.oidcSecurityService.getAccessToken();
  }

  public getUserData() {
    return this.oidcSecurityService.userData$;
  }
}
