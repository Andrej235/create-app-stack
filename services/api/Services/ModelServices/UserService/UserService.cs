using Microsoft.AspNetCore.Identity;
using Template.Models;
using Template.Services.Delete;
using Template.Services.ModelServices.TokenService;
using Template.Services.Read;

namespace Template.Services.ModelServices.UserService;

public partial class UserService(
    UserManager<User> userManager,
    SignInManager<User> signInManager,
    IEmailSender<User> emailSender,
    ITokenService tokenService,
    IReadSingleService<RefreshToken> tokenReadService,
    IDeleteService<RefreshToken> tokenDeleteService,
    IConfiguration configuration
) : IUserService;
