using System.Collections.Generic;

namespace Sisev.Models 
{
    public class ClientUser
    {
        public string Email {get; set;}
        public string FirstName {get; set;}
        public string LastName {get; set;}
        public string CPF {get; set;}
        public string Department {get; set;}
        public IDictionary<string,string> Claims {get; set;}

    }
}