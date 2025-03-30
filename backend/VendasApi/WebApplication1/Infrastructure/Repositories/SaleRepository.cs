using Microsoft.EntityFrameworkCore;
using WebApplication1.Domain.Entities;
using WebApplication1.Domain.Interfaces;
using WebApplication1.Infrastructure.Data;

namespace WebApplication1.Infrastructure.Repositories
{
    public class SaleRepository : ISalesRepository
    {
        /*private readonly AppDbContext _context;

        public SaleRepository(AppDbContext appDbContext)
        {
            _context = appDbContext;
        }

        public async Task<IEnumerable<Sale>> GetAll()
        {
            return await _context.Sale.ToListAsync();
        }

        public async Task<Sale> GetByAid(int id)
        {
            return await _context.Sale.FindAsync(id);
        }*/
    }
}
