using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Sisev.Data.Models
{
    public class Category
    {
        public int CategoryId { get; set; }

        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        public virtual IEnumerable<SubCategory> SubCategories { get; set; }
    }

    public class SubCategory
    {
        public int SubCategoryId { get; set; }

        [Required]
        public int? CategoryId { get; set; }

        [Required]
        public string Name { get; set; }

        public string Description { get; set; }
    }
}