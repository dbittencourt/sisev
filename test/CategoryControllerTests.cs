using System.Collections.Generic;
using Xunit;
using Moq;
using System.Threading.Tasks;
using Sisev.Data.Models;
using Sisev.Data;
using Sisev.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace Sisev.Tests
{
    public class CategoryControllerTests
    {
        private IEnumerable<Category> _categories;
        private IEnumerable<SubCategory> _subcategories;
        private Mock<IRepository<Category, int>> _categoriesRepository;
        private Mock<IRepository<SubCategory, int>> _subcategoriesRepository;
        private CategoryController _controller;

        public CategoryControllerTests()
        {
            _subcategories = new List<SubCategory>
            {
                new SubCategory {CategoryId = 1, SubCategoryId = 1, Name = "Subcategory1", Description = "blablabla1"},
                new SubCategory {CategoryId = 1, SubCategoryId = 2, Name = "Subcategory2", Description = "blablabla2"},
                new SubCategory {CategoryId = 1, SubCategoryId = 3, Name = "Subcategory3", Description = "blablabla3"},
                new SubCategory {CategoryId = 1, SubCategoryId = 4, Name = "Subcategory4", Description = "blablabla4"}
            };

            _categories = new List<Category>
            {
                new Category {CategoryId = 1, Name = "Category1", Description = "blablabla1", SubCategories = (List<SubCategory>) _subcategories},
                new Category {CategoryId = 2, Name = "Category2", Description = "blablabla2"},
                new Category {CategoryId = 3, Name = "Category3", Description = "blablabla3"},
                new Category {CategoryId = 4, Name = "Category4", Description = "blablabla4"},
            };

            _categoriesRepository = new Mock<IRepository<Category, int>>();
            _categoriesRepository.Setup(rep => rep.GetAllAsync()).Returns(Task.FromResult(_categories));
            _categoriesRepository.Setup(rep => rep.AddAsync(It.IsAny<Category>())).Returns(Task.FromResult((Task) null));
            _categoriesRepository.Setup(rep => rep.UpdateAsync(It.IsAny<Category>(), It.IsAny<int>())).Returns(Task.FromResult((Task) null));
            
            _subcategoriesRepository = new Mock<IRepository<SubCategory, int>>();
            _subcategoriesRepository.Setup(rep => rep.UpdateAsync(It.IsAny<SubCategory>(), It.IsAny<int>())).Returns(Task.FromResult((Task)null));

            _controller = new CategoryController(_categoriesRepository.Object, _subcategoriesRepository.Object);
        }


        [Fact]
        public async void GetCategory_NoArgument_ReturnsListOfAllCategories()
        {
            var result = await _controller.GetAll();

            Assert.NotNull(result);
            var methodResult = Assert.IsType<OkObjectResult>(result);
            var data = Assert.IsAssignableFrom<IEnumerable<Category>>(methodResult.Value);
            Assert.Equal(data, _categories);
        }

        [Theory]
        [InlineData(1)]
        [InlineData(2)]
        [InlineData(3)]
        public async void GetCategory_CorrectId_ReturnsCategory(int categoryId)
        {
            _categoriesRepository.Setup(rep => rep.GetAsync(categoryId)).Returns(Task.FromResult((_categories as List<Category>)[categoryId - 1]));

            var result = await _controller.Get(categoryId);

            Assert.NotNull(result);
            var methodResult = Assert.IsType<OkObjectResult>(result);
            var data = Assert.IsAssignableFrom<Category>(methodResult.Value);
            Assert.Equal(data, (_categories as List<Category>)[categoryId - 1]);
        }

        [Theory]
        [InlineData(5)]
        [InlineData(6)]
        [InlineData(6)]
        public async void GetCategory_IncorrectId_ReturnsNotFound(int categoryId)
        {
            _categoriesRepository.Setup(rep => rep.GetAsync(categoryId)).Returns(Task.FromResult((Category) null));

            var result = await _controller.Get(categoryId);

            Assert.NotNull(result);
            Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public async void AddCategory_CorrectCategory_ReturnsOk()
        {
            var result = await _controller.Post((_categories as List<Category>)[0]);

            Assert.NotNull(result);
            Assert.IsType<OkResult>(result);
        }

        [Fact]
        public async void AddCategory_IncorrectCategory_ReturnsBadRequest()
        {
            Category badCategory = null;

            var result = await _controller.Post(badCategory);

            Assert.NotNull(result);
            Assert.IsType<BadRequestObjectResult>(result);
        }

        [Fact]
        public async void UpdateCategory_CorrectCategory_ReturnsOk()
        {
            var result = await _controller.Put((_categories as List<Category>)[0]);

            Assert.NotNull(result);
            Assert.IsType<OkResult>(result);
        }

        [Fact]
        public async void UpdateCategory_IncorrectCategory_ReturnsBadRequest()
        {
            Category badCategory = null;

            var result = await _controller.Put(badCategory);

            Assert.NotNull(result);
            Assert.IsType<BadRequestObjectResult>(result);
        }

        [Fact]
        public async void DeleteCategory_Category_ReturnsOk()
        {
            _categoriesRepository.Setup(rep => rep.RemoveAsync(It.IsAny<int>())).Returns(Task.FromResult((Task)null));

            var result = await _controller.Delete(1);

            Assert.NotNull(result);
            Assert.IsType<OkResult>(result);
        }

        [Fact]
        public async void GetSubcategories_CorrectCategory_ReturnsOkWithListOfSubcategories()
        {
            _categoriesRepository.Setup(rep => rep.GetAsync(1)).Returns(Task.FromResult((_categories as List<Category>)[0]));

            var result = await _controller.GetAllSubcategories(1);

            Assert.NotNull(result);
            var methodResult = Assert.IsType<OkObjectResult>(result);
            var data = Assert.IsAssignableFrom<IEnumerable<SubCategory>>(methodResult.Value);
            Assert.Equal(data, _subcategories);
        }

        [Fact]
        public async void GetSubcategories_IncorrectCategory_ReturnsNotFound()
        {
            _categoriesRepository.Setup(rep => rep.GetAsync(It.IsAny<int>())).Returns(Task.FromResult((Category) null));

            var result = await _controller.GetAllSubcategories(1);

            Assert.NotNull(result);
            Assert.IsType<NotFoundResult>(result);
        }

        [Theory]
        [InlineData(1)]
        [InlineData(2)]
        [InlineData(3)]
        public async void GetSubCategory_CorrectSubCategory_ReturnsOkWithSubCategory(int subcategoryId)
        {
            _subcategoriesRepository.Setup(rep => rep.GetAsync(subcategoryId)).Returns(Task.FromResult((_subcategories as List<SubCategory>)[subcategoryId - 1]));

            var result = await _controller.GetSubcategory(subcategoryId);

            Assert.NotNull(result);
            var methodResult = Assert.IsType<OkObjectResult>(result);
            var data = Assert.IsAssignableFrom<SubCategory>(methodResult.Value);
            Assert.Equal(data, (_subcategories as List<SubCategory>)[subcategoryId - 1]);
        }

        [Theory]
        [InlineData(5)]
        [InlineData(6)]
        [InlineData(7)]
        public async void GetSubCategory_IncorrectSubCategory_ReturnsNotFound(int subcategoryId)
        {
            _subcategoriesRepository.Setup(rep => rep.GetAsync(subcategoryId)).Returns(Task.FromResult((SubCategory) null));

            var result = await _controller.GetSubcategory(subcategoryId);

            Assert.NotNull(result);
            Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public async void AddSubCategory_CorrectSubCategory_ReturnsOk()
        {
            Category category = (_categories as List<Category>)[0];
            _categoriesRepository.Setup(rep => rep.GetAsync(It.IsAny<int>())).Returns(Task.FromResult(category));
            _subcategoriesRepository.Setup(rep => rep.AddAsync(It.IsAny<SubCategory>())).Returns(Task.FromResult((Task)null));

            var result = await _controller.PostSubcategory(1, (category.SubCategories as List<SubCategory>)[0]);

            Assert.NotNull(result);
            Assert.IsType<OkResult>(result);
        }

        [Fact]
        public async void AddSubCategory_IncorrectSubCategory_ReturnsBadRequest()
        {
            SubCategory badSubcategory = null;
            _subcategoriesRepository.Setup(rep => rep.AddAsync(It.IsAny<SubCategory>())).Returns(Task.FromResult((Task) null));

            var result = await _controller.PostSubcategory(1, badSubcategory);

            Assert.NotNull(result);
            Assert.IsType<BadRequestObjectResult>(result);
        }

        [Fact]
        public async void UpdateSubCategory_CorrectSubCategory_ReturnsOk()
        {
            var result = await _controller.PutSubcategory((_subcategories as List<SubCategory>)[0]);

            Assert.NotNull(result);
            Assert.IsType<OkResult>(result);
        }

        [Fact]
        public async void UpdateSubCategory_IncorrectSubCategory_ReturnsBadRequest()
        {
            SubCategory badSubcategory = null;

            var result = await _controller.PutSubcategory(badSubcategory);

            Assert.NotNull(result);
            Assert.IsType<BadRequestObjectResult>(result);
        }

        [Fact]
        public async void DeleteSubCategory_SubCategory_ReturnsOk()
        {
            _subcategoriesRepository.Setup(rep => rep.RemoveAsync(It.IsAny<int>())).Returns(Task.FromResult((Task)null));

            var result = await _controller.DeleteSubcategory(1);

            Assert.NotNull(result);
            Assert.IsType<OkResult>(result);
        }

    }
}
