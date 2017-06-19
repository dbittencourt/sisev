using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Sisev.Models;
using Sisev.Data;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Sisev.Helpers;
using System.Security.Claims;
using System.Security.Principal;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;

namespace Sisev
{
    public class Startup
    {

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthorization();

            services.AddIdentity<User, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();
            
            services.AddOptions();
            services.Configure<TokenProviderOptions>(options => {
                options.Audience = Configuration["TokenAuthentication:Audience"];
                options.Issuer = Configuration["TokenAuthentication:Issuer"];
                var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration["TokenAuthentication:SecretKey"]));
                options.SigningCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);
            });


            services.AddEntityFrameworkNpgsql()
                .AddDbContext<ApplicationDbContext>(options => options.UseNpgsql(Configuration.GetConnectionString("sisev")));

            services.AddMvc(config  => 
            {
                var policy = new AuthorizationPolicyBuilder()
                                .RequireAuthenticatedUser()
                                .Build();
                config.Filters.Add(new AuthorizeFilter(policy)); 
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions {
                    HotModuleReplacement = true,
                    ReactHotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            ConfigureAuth(app);
            app.UseStaticFiles();
            app.UseIdentity();
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }

        private void ConfigureAuth(IApplicationBuilder app)
        {
            var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration["TokenAuthentication:SecretKey"]));

            var tokenValidationParameters = new TokenValidationParameters 
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = signingKey,

                ValidateIssuer = true,
                ValidIssuer = Configuration["TokenAuthentication:Issuer"],

                ValidateAudience = true,
                ValidAudience = Configuration["TokenAuthentication:Audience"],

                ValidateLifetime = true,
                ClockSkew = TimeSpan.Zero,
            };

            app.UseJwtBearerAuthentication(new JwtBearerOptions
            {
                AutomaticAuthenticate = true,
                AutomaticChallenge = true,
                TokenValidationParameters = tokenValidationParameters
            });

            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationScheme = "Cookie",
                AutomaticAuthenticate = true,
                AutomaticChallenge = true,
                CookieName = Configuration["TokenAuthentication:CookieName"],
                TicketDataFormat = new CustomJwtDataFormat(SecurityAlgorithms.HmacSha256, 
                tokenValidationParameters),
                ExpireTimeSpan = TimeSpan.FromMinutes(5)
            });
        }
    }
}
