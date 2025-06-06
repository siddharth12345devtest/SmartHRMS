using DataCore;
using DataEntities.Designations;
using DataModels.Designations;
using DataServices.IService;
using Microsoft.EntityFrameworkCore;

namespace DataServices.Service
{
    public class DesignationService : IDesignationService
    {
        private readonly HRMSContext _context;

        public DesignationService(HRMSContext context)
        {
            _context = context;
        }

        public async Task<Designation> CreateDesignationAsync(DesignationModel model)
        {
            var designation = new Designation
            {
                DesignationName = model.DesignationName,
                DepartmentName = model.DepartmentName,
                Status = model.Status
            };

            _context.Designations.Add(designation);
            await _context.SaveChangesAsync();
            return designation;
        }

        public async Task<DesignationModel> GetDesignationByIdAsync(int id)
        {
            var designation = await _context.Designations.FindAsync(id);
            if (designation == null) return null;

            return new DesignationModel
            {
                DesignationId = designation.DesignationId,
                DesignationName = designation.DesignationName,
                DepartmentName = designation.DepartmentName,
                Status = designation.Status
            };
        }

        public async Task<List<DesignationModel>> GetAllDesignationsAsync()
        {
            return await _context.Designations
                .Select(d => new DesignationModel
                {
                    DesignationId = d.DesignationId,
                    DesignationName = d.DesignationName,
                    DepartmentName = d.DepartmentName,
                    Status = d.Status
                }).ToListAsync();
        }
    }
}
