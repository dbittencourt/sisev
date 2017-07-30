using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Sisev.Data.Models;
using Sisev.Helpers;

namespace Sisev.Controllers
{
    public class AccountController : BaseController
    {
        private UserManager<User> _userManager;

        private readonly TokenProviderOptions _options;
        
        public AccountController(UserManager<User> userManager, IOptions<TokenProviderOptions> options)
        {   
            _userManager = userManager;
            _options = options.Value;

            ThrowIfInvalidOptions();
        }

        [HttpPost]
        [Authorize(Policy = "AdminCreate")]
        public async Task<IActionResult> Register([FromBody]RegisterViewModel registerModel)
        {
            if (ModelState.IsValid)
            {
                // Creates the new user
                User user = RegisterViewModeltoUser(registerModel);
                var result = await _userManager.CreateAsync(user, registerModel.Password);

                // if the user is created, adds hims claims
                if (result.Succeeded)
                {
                    var userClaims = CreateClaims(registerModel);
                    await _userManager.AddClaimsAsync(user, userClaims);

                    // TODO: implement email notification
                    
                    return Ok(new 
                    {
                        redirectUrl = "/",
                        statusMessage = "Usuário criado com sucesso."
                    });
                }
                // display user's errors
                AddModelErrors(result);
            }
            // sends the model state errors to the view
            return BadRequest(new 
            {
                validationErrors = GetModelState()
            });
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Authenticate([FromBody] AuthenticateViewModel loginModel)
        {
            var user =  await _userManager.FindByEmailAsync(loginModel.Email);
            // checks if the password is correct
            var validPassword = await VerifyPassword(user, loginModel.Password);

            if (validPassword)
            {
                var encodedJwt = await GenerateToken(user);
                // puts jwt in response cookies
                HttpContext.Response.Cookies.Append("access_token", encodedJwt);

                var userClaims = await _userManager.GetClaimsAsync(user);
                // gets user claims
                ClientUser cUser = ToClientUser(user, userClaims);

                return Ok(new 
                {
                    redirectUrl = "/",
                    user = cUser
                });
            }
            else
            {
                ModelState.AddModelError("", "Email e/ou senha inválidos");
                return BadRequest(new 
                {
                    validationErrors = GetModelState()
                });
            }
        }

        [HttpPost]
        public IActionResult Logout()
        {
            HttpContext.Response.Cookies.Delete("access_token");
            return Ok(new
            {
                redirectUrl = "/"
            });
        }

        [HttpPost]
        public async Task<IActionResult> Edit([FromBody]EditViewModel editModel)
        {
            if (ModelState.IsValid)
            {
                User user = EditViewModeltoUser(editModel);
                var result = await _userManager.UpdateAsync(user);
                if (result.Succeeded)
                {
                    return Ok(new 
                    {
                        redirectUrl = "/",
                        user = user
                    });
                }
                
                AddModelErrors(result);
            }

            return BadRequest(new 
            {
                validationErrors = GetModelState()
            });
        }

        /// <summary>
        /// Verifies if the given username and password are correct
        /// </summary>
        private async Task<bool> VerifyPassword(User user, string password)
        {
            if (user != null)
            {
                var validPassword = await _userManager.CheckPasswordAsync(user, password);
                if (validPassword)
                    return true;
            }
            return false;
        }

        private IEnumerable<Claim> CreateClaims(RegisterViewModel registerModel)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, registerModel.Email),
            };

            if (registerModel.Role.Equals("admin"))
                claims.AddRange(CreateAdminClaims());
            if (registerModel.Role.Equals("manager"))
                claims.AddRange(CreateManagerClaims());
            return claims.ToArray();
        }

        private IEnumerable<Claim> CreateAdminClaims()
        {
            return new List<Claim>{
                new Claim("CanCreate", "admin"),
                new Claim("CanRead", "admin"),
                new Claim("CanEdit", "admin"),
                new Claim("CanDelete", "admin")
            };
        }
        private IEnumerable<Claim> CreateManagerClaims()
        {
            return new List<Claim>{
                new Claim("CanCreate", "manager"),
                new Claim("CanRead", "manager"),
                new Claim("CanEdit", "manager"),
                new Claim("CanDelete", "manager")
            };
        }

        private async Task<string> GenerateToken(User user)
        {
            var now = DateTime.UtcNow;

            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Jti, await _options.NonceGenerator()),
                new Claim(JwtRegisteredClaimNames.Iat, new DateTimeOffset(now).ToUniversalTime().ToUnixTimeSeconds().ToString(), ClaimValueTypes.String)
            };

            claims.AddRange(await _userManager.GetClaimsAsync(user));

            // creates the jwt and writes it to a string
            var jwt = new JwtSecurityToken(issuer: _options.Issuer, audience: _options.Audience, claims: claims,
            notBefore: now, expires: now.Add(_options.Expiration), signingCredentials: _options.SigningCredentials);
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
            return encodedJwt;
        }

        /// <summary>
        /// Verifies if TokenProviderOptions are correct
        /// </summary>
        private void ThrowIfInvalidOptions()
        {   
            if (string.IsNullOrEmpty(_options.Issuer))
                throw new ArgumentNullException(nameof(TokenProviderOptions.Issuer));
            
            if (string.IsNullOrEmpty(_options.Audience))
                throw new ArgumentNullException(nameof(TokenProviderOptions.Audience));

            if (_options.Expiration == TimeSpan.Zero)
                throw new ArgumentException("Must be a non-zero timespan.", nameof(TokenProviderOptions.Expiration));
            
            if (_options.SigningCredentials == null)
                throw new ArgumentNullException(nameof(TokenProviderOptions.SigningCredentials));

            if (_options.NonceGenerator == null)
                throw new ArgumentNullException(nameof(TokenProviderOptions.NonceGenerator));
        }

        // Converts a RegisterViewModel to an User
        private User RegisterViewModeltoUser(RegisterViewModel registerModel)
        {
            return new User()
            {
                UserName = registerModel.Email,
                FirstName = registerModel.FirstName,
                LastName = registerModel.LastName,
                Email = registerModel.Email,
                CPF = registerModel.CPF,
                Department = registerModel.Department
            };
        }

        private User EditViewModeltoUser(EditViewModel editModel)
        {   
            return new User()
            {
                Department = editModel.Department,
                FirstName = editModel.FirstName,
                LastName = editModel.LastName
            };
        }

        private ClientUser ToClientUser(User user, IEnumerable<Claim> userClaims)
        {
            ClientUser cUser = new ClientUser();
            cUser.CPF = user.CPF;
            cUser.Department = user.Department;
            cUser.Email = user.Email;
            cUser.FirstName = user.FirstName;
            cUser.LastName = user.LastName;
            Dictionary<string,string> claims = new Dictionary<string,string>();
            foreach (var claim in userClaims)
            {
                claims.Add(claim.Type, claim.Value);
            }
            cUser.Claims = claims;
            return cUser;
        }

    }
}