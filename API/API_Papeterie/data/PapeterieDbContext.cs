using API_Papeterie.models;
using Microsoft.EntityFrameworkCore;

namespace API_Papeterie.data
{
    public class PapeterieDbContext(DbContextOptions<PapeterieDbContext> options) : DbContext(options)
    {
        public DbSet<Produit> Produits { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Produit>()
                .Property(p => p.Prix)
                .HasColumnType("decimal(18, 2)"); // Adjust precision and scale as needed
        }

    }
}
