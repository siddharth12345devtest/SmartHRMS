namespace DataModels.Employees
{
    public class EmployeeDetailsModel
    {
        public int Id { get; set; }

        public BasicInformationModel BasicInformation { get; set; }
        public PersonalInformationModel PersonalInformation { get; set; }
        public EmployeeContactInformationModel ContactInformation { get; set; }
        public EmployeeAboutInformationModel AboutInformation { get; set; }
        public EmployeeBankInformationModel BankInformation { get; set; }
        public EmployeeFamilyInformationModel FamilyInformation { get; set; }
        public EmployeeEducationDetailsModel EducationDetails { get; set; }
        public EmployeeExperienceModel Experience { get; set; }
        public EmployeeDocumentationModel Documentation { get; set; }
    }
    public class BasicInformationModel
    {
        public string EmployeePhone { get; set; }
        public string Email { get; set; }
        public string Gender { get; set; }
        public DateTime Birthday { get; set; }
        public string Address { get; set; }
    }

    public class PersonalInformationModel
    {
        public string PassportNo { get; set; }
        public DateTime PassportExpDate { get; set; }
        public string Nationality { get; set; }
        public string Religion { get; set; }
        public string MaritalStatus { get; set; }
        public string EmployementOfSpouse { get; set; }
        public int NumberOfChildren { get; set; }
    }

    public class EmployeeContactInformationModel
    {
        public string ContactPrimary { get; set; }
        public string ContactSecondary { get; set; }
    }

    public class EmployeeAboutInformationModel
    {
        public string About { get; set; }
    }

    public class EmployeeBankInformationModel
    {
        public string BankName { get; set; }
        public string BankAccountNumber { get; set; }
        public string IFSC { get; set; }
        public string Branch { get; set; }
    }

    public class EmployeeFamilyInformationModel
    {
        public string Name { get; set; }
        public string Relationship { get; set; }
        public DateTime DOB { get; set; }
        public string FamilyPhone { get; set; }
    }

    public class EmployeeEducationDetailsModel
    {
        public string University { get; set; }
        public string Course { get; set; }
        public string YOP { get; set; }
    }

    public class EmployeeExperienceModel
    {
        public string Company { get; set; }
        public string Designation { get; set; }
        public string YOE { get; set; }
    }

    public class EmployeeDocumentationModel
    {
        public long Id { get; set; }
        public string FileName { get; set; }
        public string ContentType { get; set; }
        public byte[] FileData { get; set; }
    }
}
