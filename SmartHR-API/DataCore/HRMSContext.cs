using DataEntities.Designations;
using DataEntities.Employees;
using Microsoft.EntityFrameworkCore;
namespace DataCore
{
    public class HRMSContext : DbContext
    {
        public HRMSContext(DbContextOptions options)
            : base(options)
        {
        }
        public DbSet<EmployeeDetails> Employees { get; set; }
        public DbSet<BasicInformation> BasicInformations { get; set; }
        public DbSet<PersonalInformation> PersonalInformations { get; set; }
        public DbSet<EmployeeContactInformation> EmployeeContactInformations { get; set; }
        public DbSet<EmployeeAboutInformation> EmployeeAboutInformations { get; set; }
        public DbSet<EmployeeBankInformation> EmployeeBankInformations { get; set; }
        public DbSet<EmployeeFamilyInformation> EmployeeFamilyInformations { get; set; }
        public DbSet<EmployeeEducationDetail> EmployeeEducationDetails { get; set; }
        public DbSet<EmployeeExperience> EmployeeExperiences { get; set; }
        public DbSet<EmployeeDocumentation> EmployeeDocumentations { get; set; }
        public DbSet<Designation> Designations { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
