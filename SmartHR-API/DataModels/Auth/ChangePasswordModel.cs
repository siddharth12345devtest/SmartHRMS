using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModels.Auth
{
    public class ChangePasswordModel
    {
        [Required(ErrorMessage = "CurrentPassword is required")]
        public string? CurrentPassword  { get; set; }

        [Required(ErrorMessage = "NewPassword is required")]
        public string? NewPassword { get; set; }

        [Required(ErrorMessage = "ConfirmPassword is required")]
        public string? ConfirmPassword  { get; set; }
    }
}