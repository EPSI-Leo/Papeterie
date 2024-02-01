export class Produit {
  public id: number;
  public nom: string;
  public texture: string;
  public grammage: number;
  public prix: number;
  public couleur?: string;

  constructor(
    nom: string,
    texture: string,
    grammage: number,
    prix: number,
    couleur?: string
  ) {

    if (!nom || nom.length > 100) {
      throw new Error('Le nom est obligatoire et doit avoir au maximum 100 caractères.');
    }

    if (!texture || texture.length > 50) {
      throw new Error('La texture est obligatoire et doit avoir au maximum 50 caractères.');
    }

    if (grammage < 10 || grammage > 1000) {
      throw new Error('Le grammage doit être un nombre entre 10 et 1000.');
    }

    if (prix < 0.01 || prix > 1000) {
      throw new Error('Le prix doit être un nombre entre 0.01 et 1000.');
    }

    if (couleur && (couleur.length < 3 || couleur.length > 25)) {
      throw new Error('La couleur facultative doit avoir entre 3 et 25 caractères.');
    }

    // Initialisation des propriétés
    this.id = 0;
    this.nom = nom;
    this.texture = texture;
    this.grammage = grammage;
    this.prix = prix;
    this.couleur = couleur;
  }
}
