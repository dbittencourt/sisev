using System.ComponentModel.DataAnnotations;

namespace Sisev.Data.Models
{
    public class Item
    {
        public string ItemId {get; set;}
        
        [Required]
        public string Name {get; set;}

        [Required]
        public string Category {get; set;}

        [Required]
        public string SubCategory {get; set;}
        public string Description {get; set;}
    }
}