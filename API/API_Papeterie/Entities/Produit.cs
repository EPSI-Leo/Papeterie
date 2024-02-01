using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace API_Papeterie.Entities;

public partial class Produit
{
    public int Id { get; set; }

    [Required(ErrorMessage = "Nom is required")]
    [MaxLength(100, ErrorMessage = "Nom cannot exceed 100 characters")]
    public required string Nom { get; set; }

    [Required(ErrorMessage = "Texture is required")]
    [MaxLength(50, ErrorMessage = "Texture cannot exceed 50 characters")]
    public required string Texture { get; set; }

    [Required(ErrorMessage = "Grammage is required")]
    [Range(10, 1000, ErrorMessage = "Grammage must be between 10 and 1000")]
    public int Grammage { get; set; }

    [Required(ErrorMessage = "Prix is required")]
    [Range(0.01, 1000, ErrorMessage = "Prix must be between 0.01 and 1000")]
    public decimal Prix { get; set; }

    [MinLength(3, ErrorMessage = "Couleur must have at least 3 characters")]
    [MaxLength(25, ErrorMessage = "Couleur cannot exceed 25 characters")]
    public string? Couleur { get; set; }
}
