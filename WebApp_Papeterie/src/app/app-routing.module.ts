import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcceuilComponent } from './route-views/acceuil/acceuil.component';
import { ContactComponent } from './route-views/contact/contact.component';
import { ProduitListComponent } from './route-views/produits/produit-list/produit-list.component';
import { ProduitAddComponent } from './route-views/produits/produit-add/produit-add.component';
import { ProduitDetailsComponent } from './route-views/produits/produit-details/produit-details.component';
import { AuthComponent } from './route-views/auth/auth.component';

const routes: Routes = [
  { path: 'accueil', component: AcceuilComponent },
  { path: 'postlogin', component: AcceuilComponent },
  { path: 'produits/list', component: ProduitListComponent},
  { path: 'produits/add', component: ProduitAddComponent},
  { path: 'produits/details/:id', component: ProduitDetailsComponent},
  { path: 'produits', redirectTo: 'produits/list' },
  { path: 'contact', component: ContactComponent },
  { path: '', component: AuthComponent },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
