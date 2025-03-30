using Microsoft.EntityFrameworkCore;
using WebApplication1.Domain.Entities;
using WebApplication1.Domain.Interfaces;
using WebApplication1.Infrastructure.Data;
using WebApplication1.DTOs;

namespace WebApplication1.Infrastructure.Repositories
{   
        
    public class CategoryRepository : ICategoryRepository
    {
        private readonly AppDbContext _appDbContext;

        public CategoryRepository(AppDbContext appDbContext)
        {
            this._appDbContext = appDbContext;
            
        }

        public async Task<ResponseApi<List<Category>>> GetAll()
        {
            try
            {
                var data = await _appDbContext.Categories.ToListAsync();

                return new ResponseApi<List<Category>>(data);
            }
            catch (Exception ex)
            {
                return ResponseApi<List<Category>>.ErrorResponse(ex.Message);
            }
        }

        public async Task<ResponseApi<Category>> GetById(int id)
        {
            try
            {
                var data = await _appDbContext.Categories.FindAsync(id);
                return new ResponseApi<Category>(data);
            }
            catch (Exception ex)
            {
                return ResponseApi<Category>.ErrorResponse(ex.Message);
            }
            
        }

        public async Task<ResponseApi<List<Category>>> Insert(Category category)
        {
            try
            {
                Category categoryPost = new() { Name = category.Name };

                _appDbContext.Categories.Add(categoryPost);
                await _appDbContext.SaveChangesAsync();

                var data = await _appDbContext.Categories.ToListAsync();
                return new ResponseApi<List<Category>>(data);
            }
            catch (Exception ex)
            {
                return ResponseApi<List<Category>>.ErrorResponse(ex.Message);
            }
        }

        public async Task<ResponseApi<List<Category>>> Update(Category category)
        {
            try
            {
                Category categoryPost = new() { Name = category.Name };

                _appDbContext.Categories.Update(categoryPost);
                await _appDbContext.SaveChangesAsync();

                var data = await _appDbContext.Categories.ToListAsync();
                return new ResponseApi<List<Category>>(data);
            }
            catch (Exception ex)
            {
                return ResponseApi<List<Category>>.ErrorResponse(ex.Message);
            }
        }

        public async Task<ResponseApi<List<Category>>> Delete(int id)
        {
            try
            {
                var categoryDelete = await _appDbContext.Categories.FindAsync(id);
                
                if (categoryDelete == null)
                {
                    return ResponseApi<List<Category>>.ErrorResponse("Registro não encontrado. Não foi possível remover!");
                }

                _appDbContext.Categories.Remove(categoryDelete);
                await _appDbContext.SaveChangesAsync();

                var data = await _appDbContext.Categories.ToListAsync();
                return new ResponseApi<List<Category>>(data);
            }
            catch (Exception ex)
            {
                return ResponseApi<List<Category>>.ErrorResponse(ex.Message);
            }
        }
    }
}
