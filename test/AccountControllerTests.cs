using System;
using Xunit;
using Moq;
using Sisev.Controllers;
using Microsoft.AspNetCore.Identity;
using Sisev.Data.Models;
using System.Threading.Tasks;

namespace test
{
    public class AccountControllerTests
    {
        User badUser, goodUser;
        AccountController _controller;
        Mock<UserManager<User>> _userManager;


        public AccountControllerTests()
        {
            badUser = new User();
            goodUser = new User();
        }

        [Fact]
        public void Register_CorrectData_ReturnsOk()
        {
            
        }
    }
}
