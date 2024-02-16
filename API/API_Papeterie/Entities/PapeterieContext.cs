using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace API_Papeterie.Entities;

public partial class PapeterieContext : DbContext
{
    public PapeterieContext()
    {
    }

    public PapeterieContext(DbContextOptions<PapeterieContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Produit> Produits { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    { }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Produit>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("produits");
            // il vaut mieux utiliser les annotations dans la définition de la classe [MaxLength(255)] juste au dessus de la propriété consernée
            // il est possible de définir plusieurs annotations, on le verra dans le cours correspondant
            entity.Property(e => e.Couleur).HasMaxLength(255);
            entity.Property(e => e.Nom).HasMaxLength(255);
            entity.Property(e => e.Prix).HasPrecision(10);
            entity.Property(e => e.Texture).HasMaxLength(255);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
