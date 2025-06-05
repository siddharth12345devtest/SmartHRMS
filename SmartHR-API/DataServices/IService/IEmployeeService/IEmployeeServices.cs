using DataEntities.Employees;
using DataModels.Employees;

namespace DataServices.Service.IEmployeeService
{
    public interface IEmployeeServices
    {
        Task<EmployeeDetails> CreateEmployeeAsync(EmployeeDetailsModel dto);
        Task<EmployeeDetailsModel> GetEmployeeByIdAsync(long id);
        Task<List<EmployeeDetailsModel>> GetAllEmployeesAsync();
    }
}

