using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sisev.Data;
using Sisev.Data.Models;

namespace Sisev.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class CategoryController : Controller
    {
        private IRepository<Category, int> _categoryRepository;
        private IRepository<SubCategory, int> _subCategoryRepository;

        public CategoryController(IRepository<Category, int> categoryRepository, IRepository<SubCategory, int> subCategoryRepository)
        {
            _categoryRepository = categoryRepository;
            _subCategoryRepository = subCategoryRepository;
        }

        #region Category api

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _categoryRepository.GetAllAsync());
        }

        [HttpGet("{categoryId}")]
        public async Task<IActionResult> Get(int categoryId)
        {
            Category category = await _categoryRepository.GetAsync(categoryId);
            if (category != null)
                return Ok(category);
            return NotFound();
        }

        [Authorize("ManagerCreate")]
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Category category)
        {
            if (category != null)
            {
                await _categoryRepository.AddAsync(category);
                return Ok();
            }

            return BadRequest("null category");
        }


        [Authorize("ManagerEdit")]
        [HttpPut]
        public async Task<IActionResult> Put([FromBody] Category category)
        {
            if (category != null)
            {
                await _categoryRepository.UpdateAsync(category, category.CategoryId);
                return Ok();
            }

            return BadRequest("null category");
        }

        [Authorize("ManagerDelete")]
        [HttpDelete("{categoryId}")]
        public async Task<IActionResult> Delete(int categoryId)
        {
            await _categoryRepository.RemoveAsync(categoryId);
            return Ok();
        }

        #endregion

        #region SubCategory api

        [HttpGet("{categoryId}/subcategory")]
        public async Task<IActionResult> GetAllSubcategories(int categoryId)
        {
            var category = await _categoryRepository.GetAsync(categoryId);
            if (category != null)
                return Ok(category.SubCategories);

            return NotFound();
        }

        [HttpGet("{categoryId}/subcategory/{subcategoryId}")]
        public async Task<IActionResult> GetSubcategory(int subcategoryId)
        {
            var subcategory = await _subCategoryRepository.GetAsync(subcategoryId);
            if (subcategory != null)
                return Ok(subcategory);

            return NotFound();
        }

        [Authorize("ManagerCreate")]
        [HttpPost("{categoryId}/subcategory")]
        public async Task<IActionResult> PostSubcategory(int categoryId, [FromBody] SubCategory subcategory)
        {
            if (subcategory != null)
            {
                subcategory.CategoryId = categoryId;
                if (await _categoryRepository.GetAsync(categoryId) != null)
                {
                    await _subCategoryRepository.AddAsync(subcategory);
                    return Ok();
                }

                return NotFound();
            }

            return BadRequest("null subcategory");
        }

        [Authorize("ManagerEdit")]
        [HttpPut("{categoryId}/subcategory")]
        public async Task<IActionResult> PutSubcategory([FromBody] SubCategory subcategory)
        {
            if (subcategory != null)
            {
                await _subCategoryRepository.UpdateAsync(subcategory, subcategory.SubCategoryId);
                return Ok();
            }

            return BadRequest("null subcategory");
        }

        [Authorize("ManagerDelete")]
        [HttpDelete("{categoryId}/subcategory/{subcategoryId}")]
        public async Task<IActionResult> DeleteSubcategory(int subcategoryId)
        {
            await _subCategoryRepository.RemoveAsync(subcategoryId);
            return Ok();
        }

        #endregion

    }
}
