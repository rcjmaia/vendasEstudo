using Microsoft.EntityFrameworkCore;
using WebApplication1.Domain.Entities;
using WebApplication1.Domain.Interfaces;
using WebApplication1.Infrastructure.Data;

namespace WebApplication1.Infrastructure.Repositories
{
    public class SaleItemRepository : ISaleItemRepository
    {
        /*private readonly AppDbContext _context;

        public SaleItemRepository(AppDbContext appDbContext)
        {
            _context = appDbContext;
        }

        public async Task<IEnumerable<SaleItem>> GetAll()
        {
            return await _context.SaleItems.ToListAsync();
        }

        public async Task<SaleItem> GetById(int id)
        {
            return await _context.SaleItems.FindAsync(id);
        }*/
    }
}
