export class Produit {
    private _id: number;
    private _nom: string;
    private _texture: string;
    private _grammage: number;
    private _prix: number;
    private _couleur?: string;

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

      if (prix < 0 || prix > 1000) {
        throw new Error('Le prix doit être un nombre entre 0 et 1000.');
      }

      if (couleur && (couleur.length < 3 || couleur.length > 25)) {
        throw new Error('La couleur facultative doit avoir entre 3 et 25 caractères.');
      }

      // Initialisation des propriétés
      this._id = Math.floor(Math.random() * 1000);
      this._nom = nom;
      this._texture = texture;
      this._grammage = grammage;
      this._prix = prix;
      this._couleur = couleur;
    }

    // Getters
    get id(): number {
      return this._id;
    }

    get nom(): string {
      return this._nom;
    }

    get texture(): string {
      return this._texture;
    }

    get grammage(): number {
      return this._grammage;
    }

    get prix(): number {
      return this._prix;
    }

    get couleur(): string | undefined {
      return this._couleur;
    }
    
    // Setters
    set nom(value: string) {
      if (!value || value.length > 100) {
        throw new Error('Le nom est obligatoire et doit avoir au maximum 100 caractères.');
      }
      this._nom = value;
    }

    set texture(value: string) {
      if (!value || value.length > 50) {
        throw new Error('La texture est obligatoire et doit avoir au maximum 50 caractères.');
      }
      this._texture = value;
    }

    set grammage(value: number) {
      if (value < 10 || value > 1000) {
        throw new Error('Le grammage doit être un nombre entre 10 et 1000.');
      }
      this._grammage = value;
    }

    set prix(value: number) {
      if (value < 0 || value > 1000) {
        throw new Error('Le prix doit être un nombre entre 0 et 1000.');
      }
      this._prix = value;
    }

    set couleur(value: string | undefined) {
      if (value && (value.length < 3 || value.length > 25)) {
        throw new Error('La couleur facultative doit avoir entre 3 et 25 caractères.');
      }
      this._couleur = value;
    }
  }

  // TODO : meilleure génération des ID
