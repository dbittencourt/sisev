using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Sisev.Data.Models
{
    public class User : IdentityUser
    {
        public string FirstName {get; set;}
        public string LastName {get; set;}
        public string CPF {get; set;}
        public string Department {get; set;}
    }
}