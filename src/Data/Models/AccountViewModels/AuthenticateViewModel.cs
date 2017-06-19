using System;
using System.ComponentModel.DataAnnotations;

namespace Sisev.Models
{
    public class AuthenticateViewModel 
    {
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email {get; set;}

        [Required]
        [DataType(DataType.Password)]
        public string Password {get; set;}

        public bool Remember {get; set;}
    }
}