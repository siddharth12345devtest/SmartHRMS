﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataServices.Auth
{
    public interface ICurrentUser
    {
        Guid UserId { get; }

        string Email { get; }

        string FullName { get; }
    }
}
