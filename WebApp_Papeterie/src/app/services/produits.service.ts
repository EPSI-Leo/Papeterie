import { Produit } from './../model/produits/produits';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProduitService {

  private _Produits: Observable<Produit[]>;

  public constructor(private _httpClient: HttpClient) {
    this._Produits = this._httpClient.get<Produit[]>('/api/Produits');
  }

  public addProduit(produit: Produit): Observable<any> {
    this.transformProduit(produit);
    const body = JSON.stringify(produit);
    const headers = { 'Content-Type': 'application/json' };

    return this._httpClient.post('/api/Produits', body, { headers })
  }

  public removeProduit(id: number): Observable<any> {
    return this._httpClient.delete(`/api/Produits/${id}`)
  }

  public updateProduit(updatedP: Produit): Observable<any> {
    this.transformProduit(updatedP);
    const body = JSON.stringify(updatedP);
    const headers = { 'Content-Type': 'application/json' };

    return this._httpClient.put(`/api/Produits/${updatedP.id}`, body, { headers })
  }

  public getProduit(id: number): Observable<Produit | undefined> {
    return this._httpClient.get<Produit>(`/api/Produits/${id}`);
  }

  public getProduits(): Observable<Produit[]> {
    return this._Produits;
  }

  private transformProduit(produit: Produit): void {
    if (produit.couleur === "") {
      produit.couleur = undefined;
    }
  }
}
