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
    nom: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    texture: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    grammage: new FormControl(null, [Validators.required, Validators.min(10), Validators.max(1000)]),
    prix: new FormControl(null, [Validators.required, Validators.min(0.01), Validators.max(1000)]),
    couleur: new FormControl('', [Validators.minLength(3), Validators.maxLength(25)])
  });

  public onSubmit() {
    this.produit = new Produit(
      this.produitForm.value.nom!,
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
