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

            entity.Property(e => e.Couleur).HasMaxLength(255);
            entity.Property(e => e.Nom).HasMaxLength(255);
            entity.Property(e => e.Prix).HasPrecision(10);
            entity.Property(e => e.Texture).HasMaxLength(255);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
