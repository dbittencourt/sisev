using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Sisev.Models;

namespace Sisev.Controllers
{
    public class AccountController : BaseController
    {
            UserManager<User> _userManager;
            SignInManager<User> _signInManager;

            public AccountController(UserManager<User> userManager, SignInManager<User> signInManager)
            {
                _userManager = userManager;
                _signInManager = signInManager;
            }

            [HttpPost]
            [AllowAnonymous]
            //[ValidateAntiForgeryToken]
            public async Task<IActionResult> Register([FromBody]RegisterViewModel registerModel)
            {
                if (ModelState.IsValid)
                {
                    // Creates the new user
                    User user = RegisterViewModeltoUser(registerModel);
                    var result = await _userManager.CreateAsync(user, registerModel.Password);

                    // TODO: implement email notification

                    // if the user is created, logs him in
                    if (result.Succeeded)
                    {
                        await _signInManager.SignInAsync(user, false);
                        return Ok(new {
                            redirectUrl = "/"
                        });
                    }
                    // display user's errors
                    AddModelErrors(result);
                }
                // sends the model state errors to the view
                return BadRequest(GetModelState());
            }

            [HttpPost]
            [AllowAnonymous]
            //[ValidateAntiForgeryToken]
            public async Task<IActionResult> Login([FromBody]LoginViewModel loginModel)
            {
                if (ModelState.IsValid)
                {
                    var isPersistent = !loginModel.Remember.Equals("") ? (bool) loginModel.Remember : false;
                    User user = await _userManager.FindByEmailAsync(loginModel.Email);
                    var result = await _signInManager.PasswordSignInAsync(user, loginModel.PasswordLogin, isPersistent, lockoutOnFailure: false);

                    if (result.Succeeded)
                    {                     
                        return Ok(new {
                            redirectUrl = "/",
                            user = user});
                    }

                    ModelState.AddModelError("", "Email e/ou senha inválidos");
                }
                
                return BadRequest(GetModelState());
                
            }

            [HttpPost]
            [ValidateAntiForgeryToken]
            public async Task<IActionResult> Logoff()
            {
                return Ok();
            }

            #region Helpers


            // Converts a RegisterViewModel to an User
             private User RegisterViewModeltoUser(RegisterViewModel registerModel)
            {
                return new User()
                {
                    UserName = registerModel.FirstName + "." + registerModel.LastName.Split(' ')[0],
                    FirstName = registerModel.FirstName,
                    LastName = registerModel.LastName,
                    Email = registerModel.Email,
                    Department = registerModel.Department
                };
            }

            #endregion
    }
}