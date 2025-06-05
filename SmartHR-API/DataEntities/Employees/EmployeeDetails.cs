using System.ComponentModel.DataAnnotations.Schema;

namespace DataEntities.Employees
{
    public class EmployeeDetails
    {
        public long Id { get; set; }
        public long BasicInfoId { get; set; }
        [ForeignKey("BasicInfoId")]
        public virtual BasicInformation BasicInformation { get; set; }
        public long PersonalInfoId { get; set; }
        [ForeignKey("PersonalInfoId")]
        public virtual PersonalInformation PersonalInformation { get; set; }
        public long EmployeeContactId { get; set; }
        [ForeignKey("EmployeeContactId")]
        public virtual EmployeeContactInformation EmployeeContactInformation { get; set; }
        public long EmployeeAboutId { get; set; }
        [ForeignKey("EmployeeAboutId")]
        public virtual EmployeeAboutInformation EmployeeAboutInformation { get; set; }
        public long EmployeeBankId { get; set; }
        [ForeignKey("EmployeeBankId")]
        public virtual EmployeeBankInformation EmployeeBankInformation { get; set; }
        public long EmployeeFamilyId { get; set; }
        [ForeignKey("EmployeeFamilyId")]
        public virtual EmployeeFamilyInformation EmployeeFamilyInformation { get; set; }
        public long EmployeeEducationId { get; set; }
        [ForeignKey("EmployeeEducationId")]
        public virtual EmployeeEducationDetail EmployeeEducationDetails { get; set; }
        public long EmployeeExpId { get; set; }
        [ForeignKey("EmployeeExpId")]
        public virtual EmployeeExperience EmployeeExperience { get; set; }
        public long EmployeeDocId { get; set; }
        [ForeignKey("EmployeeDocId")]
        public EmployeeDocumentation EmployeeDocumentation { get; set; }
    }

    public class BasicInformation
    {
        public long Id { get; set; }
        public string EmployeePhone { get; set; }
        public string Email { get; set; }
        public string Gender { get; set; }
        public DateTime Birthday { get; set; }
        public string Address { get; set; }
    }

    public class PersonalInformation
    {
        public long Id { get; set; }
        public string PassportNo { get; set; }
        public DateTime PassportExpDate { get; set; }
        public string Nationality { get; set; }
        public string Religion { get; set; }
        public string MaritalStatus { get; set; }
        public string EmployementOfSpouse { get; set; }
        public int NumberOfChildren { get; set; }
    }

    public class EmployeeContactInformation
    {
        public long Id { get; set; }
        public string ContactPrimary { get; set; }
        public string ContactSecondary { get; set; }
    }

    public class EmployeeAboutInformation
    {
        public long Id { get; set; }
        public string About { get; set; }
    }

    public class EmployeeBankInformation
    {
        public long Id { get; set; }
        public string BankName { get; set; }
        public string BankAccountNumber { get; set; }
        public string IFSC { get; set; }
        public string Branch { get; set; }
    }

    public class EmployeeFamilyInformation
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Relationship { get; set; }
        public DateTime DOB { get; set; }
        public string FamilyPhone { get; set; }
    }
    
    public class EmployeeEducationDetail
    {
        public long Id { get; set; }
        public string University { get; set; }
        public string Course { get; set; }
        public string YOP { get; set; }
    }

    public class EmployeeExperience
    {
        public long Id { get; set; }
        public string Company { get; set; }
        public string Designation { get; set; }
        public string YOE { get; set; }
    }
    
    public class EmployeeDocumentation
    {
        public long Id { get; set; }
        public string FileName { get; set; }
        public string ContentType { get; set; }
        public byte[] FileData { get; set; }
    }
}
