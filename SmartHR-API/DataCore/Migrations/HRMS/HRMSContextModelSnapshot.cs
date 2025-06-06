﻿// <auto-generated />
using System;
using DataCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace DataCore.Migrations.HRMS
{
    [DbContext(typeof(HRMSContext))]
    partial class HRMSContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.15")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("DataEntities.Designations.Designation", b =>
                {
                    b.Property<int>("DesignationId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("DesignationId"));

                    b.Property<string>("DepartmentName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DesignationName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("DesignationId");

                    b.ToTable("Designations");
                });

            modelBuilder.Entity("DataEntities.Employees.BasicInformation", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Birthday")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EmployeePhone")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("BasicInformations");
                });

            modelBuilder.Entity("DataEntities.Employees.EmployeeAboutInformation", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<string>("About")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("EmployeeAboutInformations");
                });

            modelBuilder.Entity("DataEntities.Employees.EmployeeBankInformation", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<string>("BankAccountNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BankName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Branch")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("IFSC")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("EmployeeBankInformations");
                });

            modelBuilder.Entity("DataEntities.Employees.EmployeeContactInformation", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<string>("ContactPrimary")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ContactSecondary")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("EmployeeContactInformations");
                });

            modelBuilder.Entity("DataEntities.Employees.EmployeeDetails", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<long>("BasicInfoId")
                        .HasColumnType("bigint");

                    b.Property<long>("EmployeeAboutId")
                        .HasColumnType("bigint");

                    b.Property<long>("EmployeeBankId")
                        .HasColumnType("bigint");

                    b.Property<long>("EmployeeContactId")
                        .HasColumnType("bigint");

                    b.Property<long>("EmployeeDocId")
                        .HasColumnType("bigint");

                    b.Property<long>("EmployeeEducationId")
                        .HasColumnType("bigint");

                    b.Property<long>("EmployeeExpId")
                        .HasColumnType("bigint");

                    b.Property<long>("EmployeeFamilyId")
                        .HasColumnType("bigint");

                    b.Property<long>("PersonalInfoId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("BasicInfoId");

                    b.HasIndex("EmployeeAboutId");

                    b.HasIndex("EmployeeBankId");

                    b.HasIndex("EmployeeContactId");

                    b.HasIndex("EmployeeDocId");

                    b.HasIndex("EmployeeEducationId");

                    b.HasIndex("EmployeeExpId");

                    b.HasIndex("EmployeeFamilyId");

                    b.HasIndex("PersonalInfoId");

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("DataEntities.Employees.EmployeeDocumentation", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<string>("ContentType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte[]>("FileData")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("FileName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("EmployeeDocumentations");
                });

            modelBuilder.Entity("DataEntities.Employees.EmployeeEducationDetail", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<string>("Course")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("University")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("YOP")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("EmployeeEducationDetails");
                });

            modelBuilder.Entity("DataEntities.Employees.EmployeeExperience", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<string>("Company")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Designation")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("YOE")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("EmployeeExperiences");
                });

            modelBuilder.Entity("DataEntities.Employees.EmployeeFamilyInformation", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<DateTime>("DOB")
                        .HasColumnType("datetime2");

                    b.Property<string>("FamilyPhone")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Relationship")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("EmployeeFamilyInformations");
                });

            modelBuilder.Entity("DataEntities.Employees.PersonalInformation", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<string>("EmployementOfSpouse")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MaritalStatus")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nationality")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("NumberOfChildren")
                        .HasColumnType("int");

                    b.Property<DateTime>("PassportExpDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("PassportNo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Religion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("PersonalInformations");
                });

            modelBuilder.Entity("DataEntities.Employees.EmployeeDetails", b =>
                {
                    b.HasOne("DataEntities.Employees.BasicInformation", "BasicInformation")
                        .WithMany()
                        .HasForeignKey("BasicInfoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DataEntities.Employees.EmployeeAboutInformation", "EmployeeAboutInformation")
                        .WithMany()
                        .HasForeignKey("EmployeeAboutId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DataEntities.Employees.EmployeeBankInformation", "EmployeeBankInformation")
                        .WithMany()
                        .HasForeignKey("EmployeeBankId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DataEntities.Employees.EmployeeContactInformation", "EmployeeContactInformation")
                        .WithMany()
                        .HasForeignKey("EmployeeContactId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DataEntities.Employees.EmployeeDocumentation", "EmployeeDocumentation")
                        .WithMany()
                        .HasForeignKey("EmployeeDocId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DataEntities.Employees.EmployeeEducationDetail", "EmployeeEducationDetails")
                        .WithMany()
                        .HasForeignKey("EmployeeEducationId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DataEntities.Employees.EmployeeExperience", "EmployeeExperience")
                        .WithMany()
                        .HasForeignKey("EmployeeExpId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DataEntities.Employees.EmployeeFamilyInformation", "EmployeeFamilyInformation")
                        .WithMany()
                        .HasForeignKey("EmployeeFamilyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DataEntities.Employees.PersonalInformation", "PersonalInformation")
                        .WithMany()
                        .HasForeignKey("PersonalInfoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("BasicInformation");

                    b.Navigation("EmployeeAboutInformation");

                    b.Navigation("EmployeeBankInformation");

                    b.Navigation("EmployeeContactInformation");

                    b.Navigation("EmployeeDocumentation");

                    b.Navigation("EmployeeEducationDetails");

                    b.Navigation("EmployeeExperience");

                    b.Navigation("EmployeeFamilyInformation");

                    b.Navigation("PersonalInformation");
                });
#pragma warning restore 612, 618
        }
    }
}
