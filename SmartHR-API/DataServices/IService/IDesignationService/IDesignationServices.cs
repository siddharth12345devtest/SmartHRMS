using DataEntities.Designations;
using DataModels.Designations;

namespace DataServices.IService
{
    public interface IDesignationService
    {
        Task<Designation> CreateDesignationAsync(DesignationModel model);
        Task<DesignationModel> GetDesignationByIdAsync(int id);
        Task<List<DesignationModel>> GetAllDesignationsAsync();
    }
}
