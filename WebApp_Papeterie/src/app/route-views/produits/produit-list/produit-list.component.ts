import { Component } from '@angular/core';
import { ProduitService } from 'src/app/services/produits.service';
import { Router } from '@angular/router';
import { Produit } from 'src/app/model/produits/produits';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.scss']
})
export class ProduitListComponent {

  public constructor(
    private _produitService: ProduitService,
    private _router: Router,
  ) { }

  public getProduits(){
    return this._produitService.getProduits();
  }

  public onClick(p: Produit) {
    this._router.navigate(['/produits/details', p.id]);
  }

  public goToAdd() {
    this._router.navigate(['/produits/add']);
  }

}
