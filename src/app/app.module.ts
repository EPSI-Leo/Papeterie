import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './route-views/acceuil/acceuil.component';
import { ContactComponent } from './route-views/contact/contact.component';
import { ProduitsComponent } from './route-views/produits/produits.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ContactComponent,
    ProduitsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
