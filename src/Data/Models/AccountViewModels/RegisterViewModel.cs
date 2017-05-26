using System.ComponentModel.DataAnnotations;

namespace Sisev.Models
{
    public class RegisterViewModel
    {
        [Required]
        public string FirstName {get; set;}

        [Required]
        public string LastName {get; set;}
        
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email {get; set;}

        [Required]
        public string Department {get; set;}

        [Required]
        [DataType(DataType.Password)]
        public string Password {get; set;}

    }
}