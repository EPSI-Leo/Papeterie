using System;
using System.Collections.Generic;

namespace API_Papeterie.Entities;

public partial class Produit
{
    public int Id { get; set; }

    public string Nom { get; set; } = null!;

    public string Texture { get; set; } = null!;

    public int Grammage { get; set; }

    public decimal Prix { get; set; }

    public string? Couleur { get; set; }
}
