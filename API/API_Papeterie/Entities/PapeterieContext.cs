using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace API_Papeterie.Entities;

public partial class PapeterieContext(DbContextOptions<PapeterieContext> options) : DbContext(options)
{
    public virtual DbSet<Produit> Produits { get; set; }
}
