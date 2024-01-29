import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcceuilComponent } from './route-views/acceuil/acceuil.component';
import { ContactComponent } from './route-views/contact/contact.component';
import { ProduitsComponent } from './route-views/produits/produits.component';

const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path:'produits' , component: ProduitsComponent },
  { path:'contact', component: ContactComponent },
  { path: '**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
