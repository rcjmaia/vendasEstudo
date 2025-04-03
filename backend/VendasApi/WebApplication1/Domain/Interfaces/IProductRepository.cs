using WebApplication1.Domain.Entities;
using WebApplication1.DTOs;

namespace WebApplication1.Domain.Interfaces
{
    public interface IProductRepository
    {
        Task<ResponseApi<List<Product>>> GetAll();
        Task<ResponseApi<Product>> GetById(int id);
        Task<ResponseApi<List<Product>>> Insert(Product product);
        Task<ResponseApi<List<Product>>> Update(Product product);
        Task<ResponseApi<List<Product>>> Delete(int id);
    }
}
