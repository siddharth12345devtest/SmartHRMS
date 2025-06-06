using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace DataEntities.Designations
{
    public class Designation
    {
        public int DesignationId { get; set; }
        public string DesignationName { get; set; }
        public string DepartmentName { get; set; }
        //public int NumberOfEmployees { get; set; }
        public string Status { get; set; }
    }
}
