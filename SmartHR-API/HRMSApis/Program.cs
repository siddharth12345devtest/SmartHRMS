using DataCore;
using DataServices.Auth;
using DataServices.Service.EmployeeService;
using DataServices.Service.IEmployeeService;
using HRMSApis.Filters;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Shared.Contexts.Base;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
ConfigurationManager configuration = builder.Configuration;

// For Identity Framework
builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(configuration["ConnectionString:HRMSDB"], d => d.MigrationsAssembly("DataCore")));

// For Identity
builder.Services.AddIdentity<IdentityUser, IdentityRole>()
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultTokenProviders();


//HRMS Services
builder.Services.AddScoped<IEmployeeServices, EmployeeServices>();

// Adding Authentication
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
})
// Adding Jwt Bearer
.AddJwtBearer(options =>
{
    options.SaveToken = true;
    options.RequireHttpsMetadata = false;
    options.TokenValidationParameters = new TokenValidationParameters()
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidAudience = configuration["JWT:ValidAudience"],
        ValidIssuer = configuration["JWT:ValidIssuer"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Secret"]))
    };
});
// Add services to the container.
builder.Services.AddDbContext<HRMSContext>(opts => opts.UseSqlServer(configuration["ConnectionString:HRMSDB"]));

builder.Services.AddCors(options =>
{
    options.AddPolicy("UI", builder => builder
        .WithOrigins(configuration["CorsOriginAllowed"].Split(","))
        .AllowAnyHeader()
        .AllowAnyMethod()
    );
});

//builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(GetEmployeesHandler).GetTypeInfo().Assembly));
//builder.Services.AddAutoMapper(typeof(EmployeeModel).Assembly);
builder.Services.AddScoped<IUnitOfWork, HRMSUnitOfWork>();
builder.Services.AddScoped<ICurrentUser, CurrentUser>();

foreach (var assembly in AppDomain.CurrentDomain.GetAssemblies())
{
    builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(assembly));
}

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo() { Title = "HRMS API ", Version = "v1" });
    c.EnableAnnotations();

    c.AddSecurityDefinition("bearer", new OpenApiSecurityScheme
    {
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Scheme = "bearer",
    });
    c.OperationFilter<AuthorizationHeaderParameterOperationFilter>();
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("UI");
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
