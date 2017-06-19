using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace Sisev.Helpers
{
    public class HasScopeRequirement : AuthorizationHandler<HasScopeRequirement>, IAuthorizationRequirement
    {
        private readonly string issuer;
        private readonly string scope;

        public HasScopeRequirement(string issuer, string scope)
        {
            this.issuer = issuer;
            this.scope = scope;
        }

        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, 
            HasScopeRequirement requirement)
        {
            // If user does not have the scope claim, get out of here
            if (!context.User.HasClaim(c => c.Type == "scope" && c.Issuer == issuer))
                return Task.CompletedTask;

            // Split the scopes string into an array
            var scopes = context.User.FindFirst(c => c.Type == "scope" && c.Issuer == issuer).Value.Split(' ');

            for (int i = 0; i < scopes.Length; i++)
            {
                // Succeed if the scope array contains the required scope
                if (scopes[i].Equals(scope))
                {
                    context.Succeed(requirement);
                    break;
                }
            }

            return Task.CompletedTask;
        }
    }
}