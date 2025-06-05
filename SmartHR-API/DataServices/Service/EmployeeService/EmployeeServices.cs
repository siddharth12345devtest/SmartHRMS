using DataCore;
using DataEntities.Employees;
using DataModels.Employees;
using DataServices.Service.IEmployeeService;
using Microsoft.EntityFrameworkCore;

namespace DataServices.Service.EmployeeService
{
    public class EmployeeServices : IEmployeeServices
    {
        private readonly HRMSContext _context;

        public EmployeeServices(HRMSContext context)
        {
            _context = context;
        }

        public async Task<List<EmployeeDetailsModel>> GetAllEmployeesAsync()
        {
            var employees = await _context.Employees
                .Include(e => e.BasicInformation)
                .Include(e => e.PersonalInformation)
                .Include(e => e.EmployeeContactInformation)
                .Include(e => e.EmployeeAboutInformation)
                .Include(e => e.EmployeeBankInformation)
                .Include(e => e.EmployeeFamilyInformation)
                .Include(e => e.EmployeeEducationDetails)
                .Include(e => e.EmployeeExperience)
                .Include(e => e.EmployeeDocumentation)
                .ToListAsync();

            var result = employees.Select(employee => new EmployeeDetailsModel
            {
                Id = (int)employee.Id,
                BasicInformation = new BasicInformationModel
                {
                    EmployeePhone = employee.BasicInformation.EmployeePhone,
                    Email = employee.BasicInformation.Email,
                    Gender = employee.BasicInformation.Gender,
                    Birthday = employee.BasicInformation.Birthday,
                    Address = employee.BasicInformation.Address
                },
                PersonalInformation = new PersonalInformationModel
                {
                    PassportNo = employee.PersonalInformation.PassportNo,
                    PassportExpDate = employee.PersonalInformation.PassportExpDate,
                    Nationality = employee.PersonalInformation.Nationality,
                    Religion = employee.PersonalInformation.Religion,
                    MaritalStatus = employee.PersonalInformation.MaritalStatus,
                    EmployementOfSpouse = employee.PersonalInformation.EmployementOfSpouse,
                    NumberOfChildren = employee.PersonalInformation.NumberOfChildren
                },
                ContactInformation = new EmployeeContactInformationModel
                {
                    ContactPrimary = employee.EmployeeContactInformation.ContactPrimary,
                    ContactSecondary = employee.EmployeeContactInformation.ContactSecondary
                },
                AboutInformation = new EmployeeAboutInformationModel
                {
                    About = employee.EmployeeAboutInformation.About
                },
                BankInformation = new EmployeeBankInformationModel
                {
                    BankName = employee.EmployeeBankInformation.BankName,
                    BankAccountNumber = employee.EmployeeBankInformation.BankAccountNumber,
                    IFSC = employee.EmployeeBankInformation.IFSC,
                    Branch = employee.EmployeeBankInformation.Branch
                },
                FamilyInformation = new EmployeeFamilyInformationModel
                {
                    Name = employee.EmployeeFamilyInformation.Name,
                    Relationship = employee.EmployeeFamilyInformation.Relationship,
                    DOB = employee.EmployeeFamilyInformation.DOB,
                    FamilyPhone = employee.EmployeeFamilyInformation.FamilyPhone
                },
                EducationDetails = new EmployeeEducationDetailsModel
                {
                    University = employee.EmployeeEducationDetails.University,
                    Course = employee.EmployeeEducationDetails.Course,
                    YOP = employee.EmployeeEducationDetails.YOP
                },
                Experience = new EmployeeExperienceModel
                {
                    Company = employee.EmployeeExperience.Company,
                    Designation = employee.EmployeeExperience.Designation,
                    YOE = employee.EmployeeExperience.YOE
                },
                Documentation = new EmployeeDocumentationModel
                {
                    FileName = employee.EmployeeDocumentation.FileName,
                    ContentType = employee.EmployeeDocumentation.ContentType,
                    FileData = employee.EmployeeDocumentation.FileData,
                }
            }).ToList();
            return result;
        }


        public async Task<EmployeeDetailsModel> GetEmployeeByIdAsync(long id)
        {
            var employee = await _context.Employees
                .Include(e => e.BasicInformation)
                .Include(e => e.PersonalInformation)
                .Include(e => e.EmployeeContactInformation)
                .Include(e => e.EmployeeAboutInformation)
                .Include(e => e.EmployeeBankInformation)
                .Include(e => e.EmployeeFamilyInformation)
                .Include(e => e.EmployeeEducationDetails)
                .Include(e => e.EmployeeExperience)
                .Include(e => e.EmployeeDocumentation)
                .FirstOrDefaultAsync(e => e.Id == id);

            if (employee == null)
                return null;

            var dto = new EmployeeDetailsModel
            {
                Id = (int)employee.Id,
                BasicInformation = new BasicInformationModel
                {
                    EmployeePhone = employee.BasicInformation.EmployeePhone,
                    Email = employee.BasicInformation.Email,
                    Gender = employee.BasicInformation.Gender,
                    Birthday = employee.BasicInformation.Birthday,
                    Address = employee.BasicInformation.Address
                },
                PersonalInformation = new PersonalInformationModel
                {
                    PassportNo = employee.PersonalInformation.PassportNo,
                    PassportExpDate = employee.PersonalInformation.PassportExpDate,
                    Nationality = employee.PersonalInformation.Nationality,
                    Religion = employee.PersonalInformation.Religion,
                    MaritalStatus = employee.PersonalInformation.MaritalStatus,
                    EmployementOfSpouse = employee.PersonalInformation.EmployementOfSpouse,
                    NumberOfChildren = employee.PersonalInformation.NumberOfChildren
                },
                ContactInformation = new EmployeeContactInformationModel
                {
                    ContactPrimary = employee.EmployeeContactInformation.ContactPrimary,
                    ContactSecondary = employee.EmployeeContactInformation.ContactSecondary
                },
                AboutInformation = new EmployeeAboutInformationModel
                {
                    About = employee.EmployeeAboutInformation.About
                },
                BankInformation = new EmployeeBankInformationModel
                {
                    BankName = employee.EmployeeBankInformation.BankName,
                    BankAccountNumber = employee.EmployeeBankInformation.BankAccountNumber,
                    IFSC = employee.EmployeeBankInformation.IFSC,
                    Branch = employee.EmployeeBankInformation.Branch
                },
                FamilyInformation = new EmployeeFamilyInformationModel
                {
                    Name = employee.EmployeeFamilyInformation.Name,
                    Relationship = employee.EmployeeFamilyInformation.Relationship,
                    DOB = employee.EmployeeFamilyInformation.DOB,
                    FamilyPhone = employee.EmployeeFamilyInformation.FamilyPhone
                },
                EducationDetails = new EmployeeEducationDetailsModel
                {
                    University = employee.EmployeeEducationDetails.University,
                    Course = employee.EmployeeEducationDetails.Course,
                    YOP = employee.EmployeeEducationDetails.YOP
                },
                Experience = new EmployeeExperienceModel
                {
                    Company = employee.EmployeeExperience.Company,
                    Designation = employee.EmployeeExperience.Designation,
                    YOE = employee.EmployeeExperience.YOE
                },
                Documentation = new EmployeeDocumentationModel
                {
                    FileName = employee.EmployeeDocumentation.FileName,
                    ContentType = employee.EmployeeDocumentation.ContentType,
                    FileData = employee.EmployeeDocumentation.FileData,
                }
            };
            return dto;
        }


        public async Task<EmployeeDetails> CreateEmployeeAsync(EmployeeDetailsModel dto)
        {
            var employee = new EmployeeDetails
            {
                BasicInformation = new BasicInformation
                {
                    EmployeePhone = dto.BasicInformation.EmployeePhone,
                    Email = dto.BasicInformation.Email,
                    Gender = dto.BasicInformation.Gender,
                    Birthday = dto.BasicInformation.Birthday,
                    Address = dto.BasicInformation.Address
                },
                PersonalInformation = new PersonalInformation
                {
                    PassportNo = dto.PersonalInformation.PassportNo,
                    PassportExpDate = dto.PersonalInformation.PassportExpDate,
                    Nationality = dto.PersonalInformation.Nationality,
                    Religion = dto.PersonalInformation.Religion,
                    MaritalStatus = dto.PersonalInformation.MaritalStatus,
                    EmployementOfSpouse = dto.PersonalInformation.EmployementOfSpouse,
                    NumberOfChildren = dto.PersonalInformation.NumberOfChildren
                },
                EmployeeContactInformation = new EmployeeContactInformation
                {
                    ContactPrimary = dto.ContactInformation.ContactPrimary,
                    ContactSecondary = dto.ContactInformation.ContactSecondary
                },
                EmployeeAboutInformation = new EmployeeAboutInformation
                {
                    About = dto.AboutInformation.About
                },
                EmployeeBankInformation = new EmployeeBankInformation
                {
                    BankName = dto.BankInformation.BankName,
                    BankAccountNumber = dto.BankInformation.BankAccountNumber,
                    IFSC = dto.BankInformation.IFSC,
                    Branch = dto.BankInformation.Branch
                },
                EmployeeFamilyInformation = new EmployeeFamilyInformation
                {
                    Name = dto.FamilyInformation.Name,
                    Relationship = dto.FamilyInformation.Relationship,
                    DOB = dto.FamilyInformation.DOB,
                    FamilyPhone = dto.FamilyInformation.FamilyPhone
                },
                EmployeeEducationDetails = new EmployeeEducationDetail
                {
                    University = dto.EducationDetails.University,
                    Course = dto.EducationDetails.Course,
                    YOP = dto.EducationDetails.YOP
                },
                EmployeeExperience = new EmployeeExperience
                {
                    Company = dto.Experience.Company,
                    Designation = dto.Experience.Designation,
                    YOE = dto.Experience.YOE
                },
                EmployeeDocumentation = new EmployeeDocumentation
                {
                    FileName = dto.Documentation.FileName,
                    ContentType = dto.Documentation.ContentType,
                    FileData = dto.Documentation.FileData,
                }
            };

            _context.Employees.Add(employee);
            await _context.SaveChangesAsync();
            return employee;
        }
    }
}
