using System;
using System.ComponentModel.DataAnnotations;

namespace Sisev.Models
{
    public class LoginViewModel 
    {
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email {get; set;}

        [Required]
        [DataType(DataType.Password)]
        public string PasswordLogin {get; set;}

        public Object Remember {get; set;}
    }
}