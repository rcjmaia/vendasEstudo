using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Application.Interfaces;
using WebApplication1.Domain.Entities;
using WebApplication1.DTOs;
using WebApplication1.Infrastructure.Data;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        // GET: api/Category
        [HttpGet("Get")]
        public async Task<ActionResult<ResponseApi<List<Category>>>> GetCategories()
        {
            var categories = await _categoryService.GetAll();
            //if (categories.Data == null)
            //{
            //    return NotFound();
            //}
            return Ok(categories);
        }

        // GET: api/Category/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ResponseApi<Category>>> GetCategoryById(int id)
        {
            var category = await _categoryService.GetById(id);

            if (category == null)
            {
                return NotFound();
            }

            return category;
        }

        // DELETE: api/Category/5
        [HttpDelete("Delete/{id}")]                
        public async Task<ActionResult<ResponseApi<List<Category>>>> DeleteCategory(int id)
        {
            var data = await _categoryService.Delete(id);
            return Ok(data);
        }

        [HttpPut("UpdateCategory")]
        public async Task<ActionResult<ResponseApi<List<Category>>>> Update(Category category)
        {
            var data = await _categoryService.Update(category);
            return Ok(data);    
        }

        [HttpPost("InsertCategory")]
        public async Task<ActionResult<ResponseApi<List<Category>>>> Insert(Category category)
        {
            var data = await _categoryService.Insert(category);
            return Ok(data);
        }
    }
}
