namespace API_Papeterie.Models
{
    public class Produit
    {
        private int _id;
        private string _nom;
        private string _texture;
        private int _grammage;
        private decimal _prix;
        private string? _couleur;

/// <summary>
/// Commentaire Thibaut
/// En csharp, on a plutôt l'habitude de travailler en ne spécifiant pas les variables privées
/// public string MaVariable {get;set;} va générer automatiquement (mais de manière invisible pour le dev) la variable privée _MaVariable 
/// </summary>

        
        public int Id
        {
            get { return _id; }
            set { _id = value; }
        }

        public string Nom
        {
            get { return _nom; }
            set { _nom = value; }
        }

        public string Texture
        {
            get { return _texture; }
            set { _texture = value; }
        }

        public int Grammage
        {
            get { return _grammage; }
            set { _grammage = value; }
        }

        public decimal Prix
        {
            get { return _prix; }
            set { _prix = value; }
        }

        public string? Couleur
        {
            get { return _couleur; }
            set { _couleur = value; }
        }
    }
}
