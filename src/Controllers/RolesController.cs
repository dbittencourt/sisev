using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Sisev.Models;

namespace Sisev.Controllers
{
    [Route("api/[controller]")]
    public class RolesController : BaseController
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

