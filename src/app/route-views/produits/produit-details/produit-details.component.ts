import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/model/produits/produits';
import { ProduitService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.scss']
})
export class ProduitDetailsComponent {

  public produit: Produit | undefined;

  public constructor(
    private _activeRoute: ActivatedRoute,
    private _produitService: ProduitService,
  ) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(params => {
      const produitId = +params['id']; // Convert id to number
      this.produit = this._produitService.getProduit(produitId);
    });
  }

}
