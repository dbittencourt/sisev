using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Sisev.Models;

namespace Sisev.Data
{
    public class DbSeedData
    {
        private ApplicationDbContext _context;

        public DbSeedData(ApplicationDbContext context)
        {
            _context = context;
        }

        public async void Seed()
        {
            SeedRoles();
            SeedAdminUser();

            await _context.SaveChangesAsync();
        }

        private async void SeedRoles()
        {
            RoleStore<IdentityRole> roleStore = new RoleStore<IdentityRole>(_context);

            var roles = new IdentityRole[]
            {
                new IdentityRole("user"),
                new IdentityRole("admin"),
                new IdentityRole("manager")
            };

            foreach (var role in roles)
            {
                if(!_context.Roles.Any(r => r.Name == role.Name))
                    await roleStore.CreateAsync(role);
            }
        }

        private async void SeedAdminUser()
        {
            var user = new User
            {
                UserName = "admin@sisev.com",
                NormalizedUserName = "ADMIN@SISEV.COM",
                Email = "admin@sisev.com",
                NormalizedEmail = "ADMIN@SISEV.COM",
                EmailConfirmed = true,
                LockoutEnabled = false,
                SecurityStamp = Guid.NewGuid().ToString(),
                FirstName = "Administrador",
                CPF = "00000000000",
            };

            var claims = new Claim[]{
                new Claim(JwtRegisteredClaimNames.Sub, "admin@sisev.com"),
                new Claim("CanCreate", "admin"),
                new Claim("CanRead", "admin"),
                new Claim("CanEdit", "admin"),
                new Claim("CanDelete", "admin")
            };

            foreach (Claim claim in claims)
            {
                var identityClaim = new IdentityUserClaim<string>();
                identityClaim.InitializeFromClaim(claim);
                user.Claims.Add(identityClaim);
            }

            if (!_context.Users.Any(u => u.UserName == user.UserName))
            {
                var password = new PasswordHasher<User>();
                var hashed = password.HashPassword(user, "password");
                user.PasswordHash = hashed;
                var userStore = new UserStore<User>(_context);
                await userStore.CreateAsync(user);
            }
        }
    }

}