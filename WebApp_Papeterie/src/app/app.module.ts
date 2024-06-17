import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { AuthInterceptor, AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './route-views/acceuil/acceuil.component';
import { ContactComponent } from './route-views/contact/contact.component';
import { ProduitAddComponent } from './route-views/produits/produit-add/produit-add.component';
import { ProduitDetailsComponent } from './route-views/produits/produit-details/produit-details.component';
import { ProduitListComponent } from './route-views/produits/produit-list/produit-list.component';
import { AuthComponent } from './route-views/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AuthComponent,
    ContactComponent,
    ProduitAddComponent,
    ProduitDetailsComponent,
    ProduitListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxJsonViewerModule,
    AuthModule.forRoot({
      config: {
        authority: 'http://localhost:1100/auth/realms/webapp',
        redirectUrl: window.location.origin + '/postlogin',
        postLogoutRedirectUri: window.location.origin + '/logouterror',
        clientId: 'client-papeterie',
        scope: 'openid profile email offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
        secureRoutes: ['api', '/api'],
      },
    })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
