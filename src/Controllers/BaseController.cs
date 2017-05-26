using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Sisev.Controllers
{
    public class BaseController : Controller
    {
            // Add model state errors, so the user know what must the corrected
            protected void AddModelErrors(IdentityResult result)
            {
                foreach (var error in result.Errors)
                    ModelState.AddModelError(string.Empty, error.Description);
            }

            // Returns a dictionary with modelstate errors
            protected object GetModelState()
            { 
                return ModelState.ToDictionary(error => CamelCase(error.Key), 
                error => error.Value.Errors.Select(message => message.ErrorMessage));
            }

            private string CamelCase(string name)
            {
                if (string.IsNullOrEmpty(name))
                    return name;
                if (name.Length < 2)
                    return name.ToLower();
                return name.Substring(0,1).ToLower() + name.Substring(1);
            }
    }
}