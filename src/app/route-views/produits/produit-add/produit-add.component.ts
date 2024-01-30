import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from 'src/app/model/produits/produits';
import { ProduitService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-produit-add',
  templateUrl: './produit-add.component.html',
  styleUrls: ['./produit-add.component.scss']
})
export class ProduitAddComponent {

  public produit: Produit | undefined;

  public constructor(private _produitService: ProduitService, private _router: Router) { }

  public produitForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    texture: new FormControl('', Validators.required),
    grammage: new FormControl(null) as FormControl<number | null>,
    prix: new FormControl(null) as FormControl<number | null>,
    couleur: new FormControl(''),
  });

  public onSubmit() {
    this.produit = new Produit(
      this.produitForm.value.name!,
      this.produitForm.value.texture!,
      this.produitForm.value.grammage!,
      this.produitForm.value.prix!,
      this.produitForm.value.couleur!,
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

// TODO : affichage des erreurs correct
