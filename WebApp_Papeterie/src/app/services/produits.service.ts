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

  public addProduit(produit: Produit): void {
    const body = JSON.stringify(produit);
    console.log(body);
    const headers = { 'Content-Type': 'application/json' };

    this._httpClient.post('/api/Produits', body, { headers })
      .subscribe({
        next: (response) => {
          console.log('API Response:', response);
        },
        error: (error) => {
          console.error('API Error:', error);
        },
      });
  }

  public removeProduit(id: number) {
    this._httpClient.delete(`/api/Produits/${id}`)
      .subscribe({
        next: (response) => {
          console.log('API Response:', response);
        },
        error: (error) => {
          console.error('API Error:', error);
        },
      });
  }

  public updateProduit(updatedP: Produit) {
    const body = JSON.stringify(updatedP);
    const headers = { 'Content-Type': 'application/json' };

    this._httpClient.put(`/api/Produits/${updatedP.id}`, body, { headers })
      .subscribe({
        next: (response) => {
          console.log('API Response:', response);
        },
        error: (error) => {
          console.error('API Error:', error);
        },
      });
  }

  public getProduit(id: number): Observable<Produit | undefined> {
    return this._httpClient.get<Produit>(`/api/Produits/${id}`);
  }

  public getProduits(): Observable<Produit[]> {
    return this._Produits;
  }
}
