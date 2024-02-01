import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from 'src/app/model/produits/produits';
import { ProduitFormService } from 'src/app/services/produit-form.service';
import { ProduitService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-produit-add',
  templateUrl: './produit-add.component.html',
  styleUrls: ['./produit-add.component.scss']
})
export class ProduitAddComponent {

  public produit: Produit | undefined;
  public produitForm: FormGroup;

  public constructor(
    private _produitService: ProduitService,
    private _router: Router,
    private productFormService: ProduitFormService,
  ) { this.produitForm = this.productFormService.createProduitForm(); }

  public onSubmit() {
    this.produit = new Produit(
      this.produitForm.value.nom,
      this.produitForm.value.texture,
      parseInt(this.produitForm.value.grammage),
      parseFloat(this.produitForm.value.prix),
      this.produitForm.value.couleur,
    );
    this._produitService.addProduit(this.produit);
    this._router.navigate(['/produits/list']);
  }

  public onClick() {
    this._router.navigate(['/produits/list']);
  }

  public shouldShowError(controlName: string) {
    return !this.produitForm.get(controlName)!.valid &&
      this.produitForm.get(controlName)!.touched;
  }
}
