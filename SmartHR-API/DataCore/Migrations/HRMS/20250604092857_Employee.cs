using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataCore.Migrations.HRMS
{
    /// <inheritdoc />
    public partial class Employee : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BasicInformations",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmployeePhone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Birthday = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BasicInformations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EmployeeAboutInformations",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    About = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeAboutInformations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EmployeeBankInformations",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BankName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BankAccountNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IFSC = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Branch = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeBankInformations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EmployeeContactInformations",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ContactPrimary = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContactSecondary = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeContactInformations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EmployeeDocumentations",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContentType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FileData = table.Column<byte[]>(type: "varbinary(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeDocumentations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EmployeeEducationDetails",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    University = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Course = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    YOP = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeEducationDetails", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EmployeeExperiences",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Company = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Designation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    YOE = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeExperiences", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EmployeeFamilyInformations",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Relationship = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DOB = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FamilyPhone = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeFamilyInformations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PersonalInformations",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PassportNo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PassportExpDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Nationality = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Religion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MaritalStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EmployementOfSpouse = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NumberOfChildren = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PersonalInformations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BasicInfoId = table.Column<long>(type: "bigint", nullable: false),
                    PersonalInfoId = table.Column<long>(type: "bigint", nullable: false),
                    EmployeeContactId = table.Column<long>(type: "bigint", nullable: false),
                    EmployeeAboutId = table.Column<long>(type: "bigint", nullable: false),
                    EmployeeBankId = table.Column<long>(type: "bigint", nullable: false),
                    EmployeeFamilyId = table.Column<long>(type: "bigint", nullable: false),
                    EmployeeEducationId = table.Column<long>(type: "bigint", nullable: false),
                    EmployeeExpId = table.Column<long>(type: "bigint", nullable: false),
                    EmployeeDocId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Employees_BasicInformations_BasicInfoId",
                        column: x => x.BasicInfoId,
                        principalTable: "BasicInformations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Employees_EmployeeAboutInformations_EmployeeAboutId",
                        column: x => x.EmployeeAboutId,
                        principalTable: "EmployeeAboutInformations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Employees_EmployeeBankInformations_EmployeeBankId",
                        column: x => x.EmployeeBankId,
                        principalTable: "EmployeeBankInformations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Employees_EmployeeContactInformations_EmployeeContactId",
                        column: x => x.EmployeeContactId,
                        principalTable: "EmployeeContactInformations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Employees_EmployeeDocumentations_EmployeeDocId",
                        column: x => x.EmployeeDocId,
                        principalTable: "EmployeeDocumentations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Employees_EmployeeEducationDetails_EmployeeEducationId",
                        column: x => x.EmployeeEducationId,
                        principalTable: "EmployeeEducationDetails",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Employees_EmployeeExperiences_EmployeeExpId",
                        column: x => x.EmployeeExpId,
                        principalTable: "EmployeeExperiences",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Employees_EmployeeFamilyInformations_EmployeeFamilyId",
                        column: x => x.EmployeeFamilyId,
                        principalTable: "EmployeeFamilyInformations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Employees_PersonalInformations_PersonalInfoId",
                        column: x => x.PersonalInfoId,
                        principalTable: "PersonalInformations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Employees_BasicInfoId",
                table: "Employees",
                column: "BasicInfoId");

            migrationBuilder.CreateIndex(
                name: "IX_Employees_EmployeeAboutId",
                table: "Employees",
                column: "EmployeeAboutId");

            migrationBuilder.CreateIndex(
                name: "IX_Employees_EmployeeBankId",
                table: "Employees",
                column: "EmployeeBankId");

            migrationBuilder.CreateIndex(
                name: "IX_Employees_EmployeeContactId",
                table: "Employees",
                column: "EmployeeContactId");

            migrationBuilder.CreateIndex(
                name: "IX_Employees_EmployeeDocId",
                table: "Employees",
                column: "EmployeeDocId");

            migrationBuilder.CreateIndex(
                name: "IX_Employees_EmployeeEducationId",
                table: "Employees",
                column: "EmployeeEducationId");

            migrationBuilder.CreateIndex(
                name: "IX_Employees_EmployeeExpId",
                table: "Employees",
                column: "EmployeeExpId");

            migrationBuilder.CreateIndex(
                name: "IX_Employees_EmployeeFamilyId",
                table: "Employees",
                column: "EmployeeFamilyId");

            migrationBuilder.CreateIndex(
                name: "IX_Employees_PersonalInfoId",
                table: "Employees",
                column: "PersonalInfoId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Employees");

            migrationBuilder.DropTable(
                name: "BasicInformations");

            migrationBuilder.DropTable(
                name: "EmployeeAboutInformations");

            migrationBuilder.DropTable(
                name: "EmployeeBankInformations");

            migrationBuilder.DropTable(
                name: "EmployeeContactInformations");

            migrationBuilder.DropTable(
                name: "EmployeeDocumentations");

            migrationBuilder.DropTable(
                name: "EmployeeEducationDetails");

            migrationBuilder.DropTable(
                name: "EmployeeExperiences");

            migrationBuilder.DropTable(
                name: "EmployeeFamilyInformations");

            migrationBuilder.DropTable(
                name: "PersonalInformations");
        }
    }
}
