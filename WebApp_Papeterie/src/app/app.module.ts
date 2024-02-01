import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './route-views/acceuil/acceuil.component';
import { ContactComponent } from './route-views/contact/contact.component';
import { ProduitAddComponent } from './route-views/produits/produit-add/produit-add.component';
import { ProduitDetailsComponent } from './route-views/produits/produit-details/produit-details.component';
import { ProduitListComponent } from './route-views/produits/produit-list/produit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
