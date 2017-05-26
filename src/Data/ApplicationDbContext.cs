using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Sisev.Models;

namespace Sisev.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        // all the tables EF will use most have a DbSet here
        public DbSet<User> Users { get; set;}
        public DbSet<Item> Items {get; set;}

        public ApplicationDbContext(DbContextOptions contextOptions) : base(contextOptions)
        {

        }
    }
}