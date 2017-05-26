using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Sisev.Models
{
    public class Repository<T, K> : IRepository<T, K> where T : BaseEntity
    {
        Task IRepository<T, K>.AddAsync(T entity)
        {
            throw new NotImplementedException();
        }

        Task IRepository<T, K>.AddRangeAsync(IEnumerable<T> entities)
        {
            throw new NotImplementedException();
        }

        Task<T> IRepository<T, K>.GetAsync(K id)
        {
            throw new NotImplementedException();
        }

        Task<IEnumerable<T>> IRepository<T, K>.GetAllAsync()
        {
            throw new NotImplementedException();
        }

        Task IRepository<T, K>.UpdateAsync(T entity)
        {
            throw new NotImplementedException();
        }

        Task IRepository<T, K>.DeleteAsync(K id)
        {
            throw new NotImplementedException();
        }
    }
}