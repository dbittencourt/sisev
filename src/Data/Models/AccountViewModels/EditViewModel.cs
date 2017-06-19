using System.ComponentModel.DataAnnotations;

namespace Sisev.Models
{
    public class EditViewModel
    {
        public string FirstName {get; set;}

        public string LastName {get; set;}
        
        public string Department {get; set;}

        [DataType(DataType.Password)]
        public string Password {get; set;}

    }
}