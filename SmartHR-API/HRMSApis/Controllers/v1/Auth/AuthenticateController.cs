using DataModels.Auth;
using DataServices.Auth;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Response = DataModels.Auth.Response;

namespace HRMSApis.Controllers.v1.Auth
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _configuration;
        private readonly IMediator _mediator;

        public AuthenticateController(
            UserManager<IdentityUser> userManager,
            RoleManager<IdentityRole> roleManager,
            IConfiguration configuration,
            IMediator mediator)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
            _mediator = mediator;
        }


        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            var user = await _userManager.FindByNameAsync(model.Username);

            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                var userRoles = await _userManager.GetRolesAsync(user);

                var authClaims = new List<Claim>
                {
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim("Sid", user.Id),
                    new Claim("Email", user.Email),
                    new Claim("Name", user.UserName),
                };

                foreach (var userRole in userRoles)
                {
                    authClaims.Add(new Claim("Roles", userRole));
                }

                var token = GetToken(authClaims);

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo,
                    role = userRoles.FirstOrDefault()
                });
            }

            return Unauthorized();
        }
        
  [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            var userExists = await _userManager.FindByNameAsync(model.Username);
            if (userExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists!" });

            IdentityUser user = new()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Username
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });

            if (!await _roleManager.RoleExistsAsync(model.Role))
                await _roleManager.CreateAsync(new IdentityRole(model.Role));

            if (await _roleManager.RoleExistsAsync(model.Role))
            {
                await _userManager.AddToRoleAsync(user, model.Role);
            }

            Guid zeroGuid = new Guid(new byte[16]);
            //var userEmp = new EmployeeModel()
            //{
            //    EmployeeId = zeroGuid.ToString(),
            //    FirstName = "User",
            //    LastName = "HRMS",
            //    Email = "UserHrms@hrms.com",
            //    DateOfBirth = DateTime.Now,
            //    PhoneNumber = "0123456789",
            //    AadharNumber = "2222-2222-2222",
            //    PANNumber = "D1E2F3",
            //    ESINumber = "D1E2F3",
            //    EPFNumber = "D1E2F3",
            //    DateOfJoin = DateTime.Now,
            //    PresentAddress = "Company",
            //    PermentAddress = "Company",
            //    DepartmentId = Guid.NewGuid(),
            //    DesignationId = Guid.NewGuid(),
            //    SupervisorId = Guid.NewGuid(),
            //    ShiftId = Guid.NewGuid(),
            //    UserId = Guid.Parse(user.Id),
            //};

            //var employee = await _mediator.Send(new AddEmployee
            //{
            //    EmployeeModel = userEmp,
            //    CreateUser = false
            //});


            return Ok(new Response { Status = "Success", Message = "User created successfully!" });
        }

        [HttpPost]
        [Route("changepassword")]
        public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordModel model)
        {
           
            var userId = User.FindFirstValue("Sid");

            if (userId == null)
            {
                return Unauthorized("User not authenticated");
            }

            
            var user = await _userManager.FindByIdAsync(userId);

            if (user == null)
            {
                return NotFound("User not found");
            }

            
            var isPasswordValid = await _userManager.CheckPasswordAsync(user, model.CurrentPassword);

            if (!isPasswordValid)
            {
                return BadRequest("Invalid current password");
            }

            
            if (ModelState.IsValid)
            {
                var changePasswordResult = await _userManager.ChangePasswordAsync(user, model.CurrentPassword, model.NewPassword);

                if (changePasswordResult.Succeeded)
                {
                    return Ok("Password changed successfully");
                }
                else
                {
                    return BadRequest("Failed to change password");
                }
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpPost]
        [Route("register-supervisor")]

        public async Task<IActionResult> RegisterSupervisor([FromBody] RegisterModel model)
        {
            var userExists = await _userManager.FindByEmailAsync(model.Username);
            if (userExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists!" });

            IdentityUser user = new()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Username
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });

            if (!await _roleManager.RoleExistsAsync(model.Role))
            {
                await _roleManager.CreateAsync(new IdentityRole(model.Role));
            }

            if (!await _roleManager.RoleExistsAsync("User"))
            {
                await _roleManager.CreateAsync(new IdentityRole("User"));
            }

            if (await _roleManager.RoleExistsAsync(model.Role))
            {
                await _userManager.AddToRoleAsync(user, model.Role);
            }

            Guid zeroGuid = new Guid(new byte[16]);
            //var superEmp = new EmployeeModel()
            //{
            //    EmployeeId = zeroGuid.ToString(),
            //    FirstName = "Supervisor",
            //    LastName = "HRMS",
            //    Email = "Supervisor@hrms.com",
            //    DateOfBirth = DateTime.Now,
            //    PhoneNumber = "9876543210",
            //    AadharNumber = "2222-2222-2222",
            //    PANNumber = "A1B2C3",
            //    ESINumber = "A1B2C3",
            //    EPFNumber = "A1B2C3",
            //    DateOfJoin = DateTime.Now,
            //    PresentAddress = "Company",
            //    PermentAddress = "Company",
            //    DepartmentId = Guid.NewGuid(),
            //    DesignationId = Guid.NewGuid(),
            //    SupervisorId = Guid.NewGuid(),
            //    ShiftId = Guid.NewGuid(),
            //    UserId = Guid.Parse(user.Id),
            //};
            //var employee = await _mediator.Send(new AddEmployee
            //{
            //    EmployeeModel = superEmp,
            //    CreateUser = false
            //});

            return Ok(new Response { Status = "Success", Message = "User created successfully!" });
        }

        [HttpPost]
        [Route("register-admin")]
        public async Task<IActionResult> RegisterAdmin([FromBody] RegisterModel model)
        {
            var userExists = await _userManager.FindByNameAsync(model.Username);
            if (userExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists!" });

            IdentityUser user = new()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Username
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });

            if (!await _roleManager.RoleExistsAsync(model.Role))
            {
                await _roleManager.CreateAsync(new IdentityRole(model.Role));
            }

            if (!await _roleManager.RoleExistsAsync("User"))
            {
                await _roleManager.CreateAsync(new IdentityRole("User"));
            }

            if (await _roleManager.RoleExistsAsync(model.Role))
            {
                await _userManager.AddToRoleAsync(user, model.Role);
            }
            //var userId = User.FindFirstValue("Sid");
            Guid zeroGuid = new Guid(new byte[16]);
            //var adminEmp = new EmployeeModel()
            //{
            //    EmployeeId = zeroGuid.ToString(),
            //    FirstName = "Admin",
            //    LastName = "HRMS",
            //    Email = "AdminHrms@hrms.com",
            //    DateOfBirth = DateTime.Now,
            //    PhoneNumber = "1234567890",
            //    AadharNumber = "1111-1111-1111",
            //    PANNumber = "A1B2C3",
            //    ESINumber = "A1B2C3",
            //    EPFNumber = "A1B2C3",
            //    DateOfJoin = DateTime.Now,
            //    PresentAddress = "Company",
            //    PermentAddress = "Company",
            //    DepartmentId = Guid.NewGuid(),
            //    DesignationId = Guid.NewGuid(),
            //    SupervisorId = Guid.NewGuid(),
            //    ShiftId = Guid.NewGuid(),
            //    UserId = Guid.Parse(user.Id),
            //};

            //var employee = await _mediator.Send(new AddEmployee
            //{
            //    EmployeeModel = adminEmp,
            //    CreateUser = false
            //}) ;

            return Ok(new Response { Status = "Success", Message = "User created successfully!" });
        }

        private JwtSecurityToken GetToken(List<Claim> authClaims)
        {
            var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

            var token = new JwtSecurityToken(
                issuer: _configuration["JWT:ValidIssuer"],
                audience: _configuration["JWT:ValidAudience"],
                expires: DateTime.Now.AddHours(3),
                claims: authClaims,
                signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                );

            return token;
        }
    }
}
