import { Produit } from './../model/produits/produits';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProduitService {

  private _Produits: Produit[] = [];

  public constructor(private _httpClient: HttpClient) {
    this.loadProduitsData();
  }

  private loadProduitsData(): void {
    this._httpClient.get<Produit[]>('assets/produit.json').subscribe({
      next: (data: Produit[]) => {
        this._Produits = data;
      },
      error: (error) => {
        console.error('Error loading produit.json', error);
      }
    });
  }

  public addProduit(produit: Produit): void {
    this._Produits.push(produit);
  }

  public removeProduit(p: Produit){

  }

  public updateProduit(p: Produit){

  }

  public getProduit(id: number) : Produit | undefined {
    return this._Produits.find(produit => produit.id === id);
  }

  public getProduits(){
    return this._Produits;
  }
}
