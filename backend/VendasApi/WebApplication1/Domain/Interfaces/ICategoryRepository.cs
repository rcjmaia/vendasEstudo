using WebApplication1.Domain.Entities;
using WebApplication1.DTOs;

namespace WebApplication1.Domain.Interfaces
{
    public interface ICategoryRepository
    {
        Task<ResponseApi<List<Category>>> GetAll();
        Task<ResponseApi<Category>> GetById(int id);
        Task<ResponseApi<List<Category>>> Insert(Category category);
        Task<ResponseApi<List<Category>>> Update(Category category);
        Task<ResponseApi<List<Category>>> Delete(int id);
    }
}
