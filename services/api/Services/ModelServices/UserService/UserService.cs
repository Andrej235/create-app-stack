using Microsoft.AspNetCore.Identity;
using Template.Models;

namespace Template.Services.ModelServices.UserService;

public partial class UserService(
    UserManager<User> userManager,
    IEmailSender<User> emailSender,
    IConfiguration configuration
) : IUserService;
