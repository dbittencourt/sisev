using System.Collections.Generic;
using System.Threading.Tasks;
using Sisev.Models;

namespace Sisev.Models
{
    public interface IRepository<T, K> where T : BaseEntity
    {
        Task AddAsync(T entity);

        Task AddRangeAsync(IEnumerable<T> entities);

        Task<T> GetAsync(K id);

        Task<IEnumerable<T>> GetAllAsync();

        Task UpdateAsync(T entity);

        Task DeleteAsync(K id);
    }
}