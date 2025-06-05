using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataEntities.Leave
{
    public class LeaveAdmin
    {
 
        public int Id { get; set; }
        public int EmployeeId { get; set; }  
        public string LeaveType { get; set; } = string.Empty;  
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public int NumberOfDays { get; set; }

       
    }
}
