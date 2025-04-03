using Microsoft.EntityFrameworkCore;
using WebApplication1.Domain.Entities;
using WebApplication1.Domain.Interfaces;
using WebApplication1.DTOs;
using WebApplication1.Infrastructure.Data;

namespace WebApplication1.Infrastructure.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly AppDbContext _context;

        public ProductRepository(AppDbContext appDbContext)
        {
            _context = appDbContext;            
        }

        public async Task<ResponseApi<List<Product>>> GetAll()
        {
            try
            {
                var data = await _context.Products.ToListAsync();
                return new ResponseApi<List<Product>>(data);
            }
            catch (Exception ex)
            {
                return ResponseApi<List<Product>>.ErrorResponse(ex.Message);
            }
        }

        public async Task<ResponseApi<Product>> GetById(int id)
        {
            try
            {
                var data = await _context.Products.FindAsync(id);
                return new ResponseApi<Product>(data);
            }
            catch (Exception ex)
            {
                return ResponseApi<Product>.ErrorResponse(ex.Message);
            }
        }

        public Task<ResponseApi<List<Product>>> Insert(Product product)
        {
            throw new NotImplementedException();
        }

        public Task<ResponseApi<List<Product>>> Update(Product product)
        {
            throw new NotImplementedException();
        }

        public async Task<ResponseApi<List<Product>>> Delete(int id)
        {
            try
            {
                var product = await _context.Products.FindAsync(id);
                if (product == null)
                {
                    return ResponseApi<List<Product>>.ErrorResponse("Registro não encontrado. Não foi possível remover!");
                }

                _context.Remove(product);
                await _context.SaveChangesAsync();

                var data = await _context.Products.ToListAsync();
                return new ResponseApi<List<Product>>(data);
            }
            catch (Exception ex)
            {
                return ResponseApi<List<Product>>.ErrorResponse(ex.Message);
            }
        }
    }
}
