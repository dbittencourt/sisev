using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace Sisev.Controllers
{
    [Route("api/[controller]")]
    public class RolesController : Controller
    {
        private RoleManager<IdentityRole> _roleManager;
        
        public RolesController(RoleManager<IdentityRole> roleManager)

        {
            _roleManager = roleManager;
        }

        [Authorize(Policy = "AdminRead")]
        public IActionResult GetAll()
        {
            var roles = _roleManager.Roles.Select(role => role.Name);
            return Ok(roles);
        }

    }
}

