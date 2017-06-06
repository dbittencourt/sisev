using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Sisev.Models;

namespace Sisev.Controllers
{

    [Authorize]
    public class AccountController : BaseController
    {
            UserManager<User> _userManager;

            public AccountController(UserManager<User> userManager)
            {
                _userManager = userManager;
            }

            [HttpPost]
            [AllowAnonymous]
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
                        await LoginUser(user);

                        // TODO: implement email notification
                        
                        return Ok(new {
                            redirectUrl = "/",
                            user = user
                        });
                    }
                    // display user's errors
                    AddModelErrors(result);
                }
                // sends the model state errors to the view
                return BadRequest(new {
                    validationErrors = GetModelState()
                });
            }


            [HttpPost]
            [AllowAnonymous]
            public async Task<IActionResult> Login([FromBody]LoginViewModel loginModel)
            {
                if (ModelState.IsValid)
                {
                    User user = await _userManager.FindByEmailAsync(loginModel.Email);

                    bool result = await _userManager.CheckPasswordAsync(user, loginModel.Password);

                    if (result)
                    {
                        await LoginUser(user, loginModel.Remember);
                        return Ok(new {
                            redirectUrl = "/",
                            user = user});
                    }
                }

                ModelState.AddModelError("", "Email e/ou senha inválidos");
                return BadRequest(new {
                    validationErrors = GetModelState()
                });
                
            }

            [HttpPost]
            public async Task<IActionResult> Logout()
            {
                await HttpContext.Authentication.SignOutAsync("MyCookieMiddlewareInstance");
                return Ok(new {
                    redirectUrl = "/"
                });
            }

            #region Helpers

             private async Task LoginUser(User user, bool isPersistent = false)
            {
                var claims = user.Claims as IEnumerable<Claim>;
                ClaimsPrincipal principal = new ClaimsPrincipal(new ClaimsIdentity(claims, "password"));
                AuthenticationProperties authProperties = new AuthenticationProperties(){
                    IsPersistent = isPersistent 
                };
                await HttpContext.Authentication.SignInAsync("MyCookieMiddlewareInstance", principal,
                    authProperties);
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
                    Department = registerModel.Department
                };
            }

            #endregion
    }
}