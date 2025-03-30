using WebApplication1.Application.Interfaces;
using WebApplication1.Domain.Entities;
using WebApplication1.Domain.Interfaces;
using WebApplication1.DTOs;

namespace WebApplication1.Application.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository categoryRepository;

        public CategoryService(ICategoryRepository categoryRepository)
        {
            this.categoryRepository = categoryRepository;            
        }

        public async Task<ResponseApi<List<Category>>> Delete(int id)
        {
            return await categoryRepository.Delete(id);
        }

        public async Task<ResponseApi<List<Category>>> GetAll()
        {
            return await categoryRepository.GetAll();
        }

        public async Task<ResponseApi<Category>> GetById(int id)
        {
            return await categoryRepository.GetById(id);
        }

        public async Task<ResponseApi<List<Category>>> Insert(Category category)
        {
            return await categoryRepository.Insert(category);
        }

        public async Task<ResponseApi<List<Category>>> Update(Category category)
        {
            return await categoryRepository.Update(category);
        }
    }
}
