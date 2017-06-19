using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Sisev.Helpers;
using Sisev.Models;

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
        public async Task<IActionResult> Register([FromBody]RegisterViewModel registerModel)
        {
            if (ModelState.IsValid)
            {
                // Creates the new user
                User user = RegisterViewModeltoUser(registerModel);
                var result = await _userManager.CreateAsync(user, registerModel.Password);

                // if the user is created, logs him in
                if (result.Succeeded)
                {
                    // TODO: implement email notification
                    
                    return Ok(new 
                    {
                        redirectUrl = "/",
                        user = user
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
        //[AllowAnonymous]
        public async Task<IActionResult> Authenticate([FromBody] AuthenticateViewModel loginModel)
        {
            // checks if the password is correct
            var validPassword = await VerifyPassword(loginModel.Email, loginModel.Password);

            if (validPassword)
            {
                var now = DateTime.UtcNow;

                var claims = new Claim[]
                {
                    new Claim(JwtRegisteredClaimNames.Sub, loginModel.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, await _options.NonceGenerator()),
                    new Claim(JwtRegisteredClaimNames.Iat, new DateTimeOffset(now).ToUniversalTime().ToUnixTimeSeconds().ToString(), ClaimValueTypes.String)
                };

                // creates the jwt and writes it to a string
                var jwt = new JwtSecurityToken(issuer: _options.Issuer, audience: _options.Audience, claims: claims,
                notBefore: now, expires: now.Add(_options.Expiration), signingCredentials: _options.SigningCredentials);
                var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

                // puts jwt in response cookies
                HttpContext.Response.Cookies.Append("access_token", encodedJwt);

                return Ok(new 
                {
                    redirectUrl = "/"
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
                User user = await EditViewModeltoUser(editModel);
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
        private async Task<bool> VerifyPassword(string username, string password)
        {
            var user = await _userManager.FindByEmailAsync(username);
            if (user != null)
            {
                var validPassword = await _userManager.CheckPasswordAsync(user, password);
                if (validPassword)
                    return true;
            }
            return false;
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

        private async Task<User> EditViewModeltoUser(EditViewModel editModel)
        {
            User user = await _userManager.GetUserAsync(HttpContext.User);

            if (editModel.Department != null)
                user.Department = editModel.Department;
            if (editModel.FirstName != null)
                user.FirstName = editModel.FirstName;
            if (editModel.LastName != null)
                user.LastName = editModel.LastName;
        
            return user;
        }


    }
}