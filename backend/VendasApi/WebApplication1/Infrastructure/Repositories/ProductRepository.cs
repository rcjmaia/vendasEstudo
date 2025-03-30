using Microsoft.EntityFrameworkCore;
using WebApplication1.Domain.Entities;
using WebApplication1.Domain.Interfaces;
using WebApplication1.Infrastructure.Data;

namespace WebApplication1.Infrastructure.Repositories
{
    public class ProductRepository : IProductRepository
    {
        /*private readonly AppDbContext _context;

        public ProductRepository(AppDbContext appDbContext)
        {
            _context = appDbContext;            
        }
        public async Task<IEnumerable<Product>> GetAll()
        {
            return await _context.Products.ToListAsync();
        }

        public async Task<Product> GetById(int id)
        {
            return await _context.Products.FindAsync(id);
        }*/
    }
}
