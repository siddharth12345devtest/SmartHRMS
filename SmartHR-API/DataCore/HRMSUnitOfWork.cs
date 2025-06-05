﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Shared.Contexts.Base;
using EFCore.BulkExtensions;

namespace DataCore
{
    public class HRMSUnitOfWork : IUnitOfWork
    {
        private static readonly object _createRepositoryLock = new();

        private readonly Dictionary<Type, object> _repositories = new();

        private bool _disposed;


        public DbContext dfContext { get; }

        public object Designations => throw new NotImplementedException();
        public object Departments => throw new NotImplementedException();

        public HRMSUnitOfWork(HRMSContext context)
        {
            dfContext = context;
        }

        public void Dispose()
        {
            if (!_disposed)
            {
                Dispose(true);
            }

            GC.SuppressFinalize(this);
        }

        public IRepositoryCore<TEntity> Repository<TEntity>()
            where TEntity : class
        {
            if (!_repositories.ContainsKey(typeof(TEntity)))
            {
                lock (_createRepositoryLock)
                {
                    if (!_repositories.ContainsKey(typeof(TEntity)))
                    {
                        CreateRepository<TEntity>();
                    }
                }
            }

            return _repositories[typeof(TEntity)] as IRepositoryCore<TEntity>;
        }

        public async Task<IDbContextTransaction> BeginTransactionAsync()
        {
            return dfContext.Database.CurrentTransaction == null
                ? await dfContext.Database.BeginTransactionAsync()
                : new NestedTransaction();
        }

        public Task CommitTransactionAsync(CancellationToken cancellationToken = default)
        {
            return dfContext.Database.CommitTransactionAsync(cancellationToken);
        }

        public Task RollbackTransactionAsync(CancellationToken cancellationToken = default)
        {
            return dfContext.Database.RollbackTransactionAsync(cancellationToken);
        }

        public Task SaveAsync(CancellationToken cancellationToken = default)
        {
            return dfContext.SaveChangesAsync(cancellationToken);
        }

        public void Save()
        {
            dfContext.SaveChanges();
        }

        public int ExecuteQuery(string query, params object[] parameters)
        {
            return dfContext.Database.ExecuteSqlRaw(query, parameters);
        }

        public async Task<int> ExecuteQueryAsync(string query, params object[] parameters)
        {
            return await dfContext.Database.ExecuteSqlRawAsync(query, parameters);
        }

        public string GetTableNameWithSchema<T>()
        {
            var entityType = dfContext.Model.FindEntityType(typeof(T));

            return $"{entityType.GetSchema()}.{entityType.GetTableName()}";
        }

        public void Detach<T>(T entity)
        {
            dfContext.Entry(entity).State = EntityState.Detached;
        }

        public void Attach<T>(T entity)
        {
            dfContext.Entry(entity).State = EntityState.Modified;
        }

        public Task BulkInsertAsync<TEntity>(IEnumerable<TEntity> entities)
            where TEntity : class
        {
            Action<BulkConfig> action = c => c.SetOutputIdentity = true;
            return dfContext.BulkInsertAsync(entities.ToList(), action);
        }

        private void CreateRepository<TEntity>()
            where TEntity : class
        {
            _repositories.Add(typeof(TEntity), new Repository<TEntity>(dfContext));
        }

        private void Dispose(bool disposing)
        {
            if (disposing)
            {
                dfContext?.Dispose();
                _disposed = true;
            }
        }

        public Task SaveChangesAsync(CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
