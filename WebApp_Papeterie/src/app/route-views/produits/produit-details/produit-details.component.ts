import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/model/produits/produits';
import { ProduitFormService } from 'src/app/services/produit-form.service';
import { ProduitService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.scss']
})
export class ProduitDetailsComponent {

  public produit: Produit | undefined;
  public produitForm: FormGroup;
  public isEditing = false;

  public constructor(
    private _activeRoute: ActivatedRoute,
    private _produitService: ProduitService,
    private productFormService: ProduitFormService,
  ) { this.produitForm = this.productFormService.createProduitForm(); }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(params => {
      const produitId = +params['id']; // Convert id to number
      this.produit = this._produitService.getProduit(produitId);
    });
    this.produitForm.setValue({
      nom: this.produit?.nom,
      texture: this.produit?.texture,
      grammage: this.produit?.grammage,
      prix: this.produit?.prix,
      couleur: this.produit?.couleur,
    })
  }

  public onClick() {
    this.isEditing = !this.isEditing;
  }

  public shouldShowError(controlName: string) {
    return !this.produitForm.get(controlName)!.valid &&
      this.produitForm.get(controlName)!.touched;
  }

  public onSubmit() {
    this.produit!.nom = this.produitForm.value.nom;
    this.produit!.texture = this.produitForm.value.texture;
    this.produit!.grammage = this.produitForm.value.grammage;
    this.produit!.prix = this.produitForm.value.prix;
    this.produit!.couleur = this.produitForm.value.couleur;

    this._produitService.updateProduit(this.produit!);
    this.isEditing = false;
  }
}
