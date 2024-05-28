using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using API_Papeterie.Entities;  // Ajoutez le namespace approprié
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace API_Papeterie.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ProduitsController : ControllerBase
    {
        private readonly PapeterieContext _context;

        public ProduitsController(PapeterieContext context)
        {
            _context = context;
        }

        // GET: api/Produits
        [HttpGet]
        public IActionResult Get()
        {
            var produits = _context.Produits.ToList();
            return Ok(produits);
        }

        // GET: api/Produits/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var produit = _context.Produits.Find(id);
            if (produit == null)
            {
                return NotFound();
            }
            return Ok(produit);
        }

        // POST: api/Produits
        [HttpPost]
        public IActionResult Post([FromBody] Produit produit) //
        {
            _context.Produits.Add(produit);
            _context.SaveChanges();
            return CreatedAtAction(nameof(Get), new { id = produit.Id }, produit);
        }

        // PUT: api/Produits/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Produit produit)
        {
            var existingProduit = _context.Produits.Find(id);
            if (existingProduit == null)
            {
                return NotFound();
            }

            existingProduit.Nom = produit.Nom;
            existingProduit.Texture = produit.Texture;
            existingProduit.Grammage = produit.Grammage;
            existingProduit.Prix = produit.Prix;
            existingProduit.Couleur = produit.Couleur;

            _context.SaveChanges();
            return NoContent();
        }

        // DELETE: api/Produits/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var produit = _context.Produits.Find(id);
            if (produit == null)
            {
                return NotFound();
            }

            _context.Produits.Remove(produit);
            _context.SaveChanges();
            return NoContent();
        }

        //test db connection
        [HttpGet("testdbconnection")]
        public IActionResult TestDbConnection()
        {
            try
            {
                _context.Database.OpenConnection();
                _context.Database.CloseConnection();
                return Ok("Database connection successful!");
            }
            catch (Exception ex)
            {
                return BadRequest($"Database connection failed: {ex.Message}");
            }
        }

    }
}
