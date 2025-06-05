using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataEntities.Department
{
    public class Department
    {
        public int Id { get; set; }

      
        public string DepartmentName { get; set; } = string.Empty;

    
        public int NoOfEmployees { get; set; }

    
        public string Status { get; set; } = "InActive"; 

       
    }
}
