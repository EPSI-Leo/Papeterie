import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})

export class ProduitFormService {
  createProduitForm(): FormGroup {
    return new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      texture: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      grammage: new FormControl(null, [
        Validators.required,
        Validators.min(10),
        Validators.max(1000),
        Validators.pattern(/^[0-9]+$/),
      ]) as FormControl<number | null>,
      prix: new FormControl(null, [
        Validators.required,
        Validators.min(0.01),
        Validators.max(1000),
        Validators.pattern(/^\d+(\.\d{1,2})?$/),
      ]) as FormControl<number | null>,
      couleur: new FormControl('', [Validators.minLength(3), Validators.maxLength(25)])
    });
  }
}
