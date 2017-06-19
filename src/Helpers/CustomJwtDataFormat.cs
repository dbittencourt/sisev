using System;
using Microsoft.AspNetCore.Authentication;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.AspNetCore.Http.Authentication;

namespace Sisev.Helpers
{
    public class CustomJwtDataFormat : ISecureDataFormat<AuthenticationTicket>
    {
        private readonly string algorithm;
        private readonly TokenValidationParameters validationParameters;

        public CustomJwtDataFormat(string algorithm, TokenValidationParameters validationParameters)
        {
            this.algorithm = algorithm;
            this.validationParameters = validationParameters;
        }

        public string Protect(AuthenticationTicket data)
        {
            throw new NotImplementedException();
        }

        public string Protect(AuthenticationTicket data, string purpose)
        {
            throw new NotImplementedException();
        }

        public AuthenticationTicket Unprotect(string protectedText)
        => Unprotect(protectedText, null);

        public AuthenticationTicket Unprotect(string protectedText, string purpose)
        {
            var handler = new JwtSecurityTokenHandler();
            ClaimsPrincipal principal = null;
            SecurityToken validToken = null;
            
            try
            {
                principal = handler.ValidateToken(protectedText, this.validationParameters, out validToken);
                var validJwt = validToken as JwtSecurityToken;

                if (validJwt == null)
                    throw new ArgumentNullException("Invalid JWT.");

                if (!validJwt.Header.Alg.Equals(algorithm, StringComparison.Ordinal))
                    throw new ArgumentException($"Algorithm must be '{algorithm}'.");

            }
            catch(SecurityTokenValidationException e)
            {
                return null;
            }
            catch(ArgumentException e)
            {
                return null;
            }

            // validation passed
            return new AuthenticationTicket(principal, new AuthenticationProperties(), "Cookie");
        }
    }
}