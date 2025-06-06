using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModels.Designations
{
    public class DesignationModel
    {
        public int DesignationId { get; set; }
        public string DesignationName { get; set; }
        public string DepartmentName { get; set; }
        //public int NumberOfEmployees { get; set; }
        public string Status { get; set; }
    }
}