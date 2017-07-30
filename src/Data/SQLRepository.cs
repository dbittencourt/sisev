using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Sisev.Data
{
    public class SQLRepository<T, K> : IRepository<T, K> where T : class
    {
        private readonly ApplicationDbContext _context;
        private DbSet<T> _entities;


        public SQLRepository(ApplicationDbContext context)
        {
            _context = context;
            _entities = _context.Set<T>();
        }

        public async Task AddAsync(T entity)
        {
            if (entity != null)
            {
                _entities.Add(entity);
                await _context.SaveChangesAsync();
            }
        }

        public async Task AddRangeAsync(IEnumerable<T> entities)
        {
            if (entities != null)
            {
                _entities.AddRange(entities);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _entities.ToListAsync();
        }

        public async Task<T> GetAsync(K entityId)
        {
            return await _entities.FindAsync(entityId);
        }

        public async Task RemoveAsync(K entityId)
        {
            T entity = await _entities.FindAsync(entityId);
            if (entity != null)
            {
                _entities.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }

        public async Task UpdateAsync(T entity, K entityId)
        {
            if (entity != null)
            {
                T oldEntity = await _entities.FindAsync(entityId);

                if (oldEntity != null)
                {
                    _context.Entry(oldEntity).CurrentValues.SetValues(entity);
                    await _context.SaveChangesAsync();
                }
                
            }
        }
    }
}