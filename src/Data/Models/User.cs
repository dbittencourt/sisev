namespace Sisev.Models
{
    public class User : BaseEntity
    {
        public string FirstName {get; set;}
        public string LastName {get; set;}
        public string CPF {get; set;}
        public string Department {get; set;}
    }
}