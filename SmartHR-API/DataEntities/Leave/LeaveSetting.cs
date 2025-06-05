using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataEntities.Leave
{
    public class LeaveSetting
    {
   
        public int Id { get; set; }

        public string LeaveType { get; set; } = string.Empty;  
        //public bool IsEnabled { get; set; } = false; 

 
        //public string? CustomPolicy { get; set; } 

        //public string? SettingsJson { get; set; }

        //public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        //public DateTime? UpdatedAt { get; set; }
    }
}
