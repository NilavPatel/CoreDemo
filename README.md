# Command list for .Net Core

### Create new folder using CMD
`````
* mkdir CoreDemo
* cd CoreDemo
`````

### Create solution and projects
`````
* dotnet new sln -n=CoreDemo
* dotnet new angular -o Web
* dotnet new webapi -o WebApi
* dotnet new classlib -o ApplicationCore
* dotnet new classlib -o Infrastructure

Available project templates like web | webapi | console | classlib | mvc | xunit | angular
Here solution name will be as per folder name.
`````

### Add projects to solution file
`````
* dotnet sln CoreDemo.sln add Web/Web.csproj
* dotnet sln CoreDemo.sln add WebApi/WebApi.csproj
* dotnet sln CoreDemo.sln add ApplicationCore/ApplicationCore.csproj
* dotnet sln CoreDemo.sln add Infrastructure/Infrastructure.csproj

* dotnet sln CoreDemo.sln remove Infrastructure/Infrastructure.csproj
`````

### Add reference of project to another project
`````
* dotnet add Infrastructure/Infrastructure.csproj reference ApplicationCore/ApplicationCore.csproj
* dotnet add WebApi/WebApi.csproj reference ApplicationCore/ApplicationCore.csproj
* dotnet add WebApi/WebApi.csproj reference Infrastructure/Infrastructure.csproj

* dotnet remove WebApi/WebApi.csproj reference Infrastructure/Infrastructure.csproj
`````

### Restore / Build / Clean / Run / Publish
`````
* dotnet restore
* dotnet build
* dotnet build --no-restore
* dotnet clean
* dotnet run --project Web/Web.csproj
* dotnet publish --configuration {debug/release}
* dotnet test
`````

### Add packages for Entity framework core
`````
* dotnet add Infrastructure/Infrastructure.csproj package Microsoft.EntityFrameworkCore.SqlServer
* dotnet add Infrastructure/Infrastructure.csproj package Microsoft.EntityFrameworkCore.Tools 
* dotnet add Infrastructure/Infrastructure.csproj package Microsoft.EntityFrameworkCore.SqlServer.Design
* dotnet restore
`````

### Create context class for Entity framework core
`````
* dotnet ef dbcontext scaffold "Server=**[server]**;Database=**[database]**;User Id=**[username]**;Password=**[password]**;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -d -o Data -c "**[contextname]**" --project Infrastructure/Infrastructure.csproj --startup-project WebApi/WebApi.csproj

use --force to overwrite context file.
`````

