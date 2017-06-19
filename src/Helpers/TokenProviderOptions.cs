using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;

namespace Sisev.Helpers
{
    public class TokenProviderOptions
    {
        public TokenProviderOptions()
        {

        }
        
        /// <summary>
        /// The Issuer (iss) claim for generated tokens
        /// </summary>
        public string Issuer { get; set; }

        /// <summary>
        /// The audience (aud) claim for generated tokens
        /// </summary>
        public string Audience { get; set; }

        /// <summary>
        /// The experitaton time for generated tokens
        /// </summary>
        /// <remarks>The default is five minuttes</remarks>
        public TimeSpan Expiration { get; set; } = TimeSpan.FromMinutes(5);

        /// <summary>
        /// The signing key used to generate tokens
        /// </summary>
        public SigningCredentials SigningCredentials { get; set; }

        /// <summary>
        /// Generates a random value (nonce) for each generated token
        /// </summary>
        /// <remarks>The default nonce is a raondom GUID</remarks>
        public Func<Task<string>> NonceGenerator { get; set; } 
        = () => Task.FromResult(Guid.NewGuid().ToString()); 
    }
}