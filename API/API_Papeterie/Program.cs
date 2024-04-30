using API_Papeterie.Entities;
using Microsoft.EntityFrameworkCore;
using MySql.EntityFrameworkCore.Extensions;

var builder = WebApplication.CreateBuilder(args);
var confBuilder = new ConfigurationBuilder();
confBuilder.AddJsonFile("appsettings.json");
confBuilder.AddEnvironmentVariables();
var configuration = confBuilder.Build();

string connectionString = configuration.GetConnectionString("DefaultConnection")
    .Replace("${DB_SERVER}", configuration["DB_SERVER"])
    .Replace("${DB_PORT}", configuration["DB_PORT"])
    .Replace("${DB_USER}", configuration["DB_USER"])
    .Replace("${DB_PASSWORD}", configuration["DB_PASSWORD"])
    .Replace("${DB_NAME}", configuration["DB_NAME"]);
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<PapeterieContext>(options =>
{
    options.UseMySQL(connectionString);
});

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
