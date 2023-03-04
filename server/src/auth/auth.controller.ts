import { Controller, Post, Body, Query, Get, Redirect } from '@nestjs/common';

import { AuthService } from './auth.service';
import { SignupDto, SignInDto, VerifyDto, ResendEmailDto } from './dto';
import { EmailServices } from './email.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly emailServices: EmailServices,
  ) {}

  @Post('sign-up')
  signup(@Body() dto: SignupDto) {
    return this.authService.signup(dto);
  }

  @Post('sign-in')
  login(@Body() dto: SignInDto) {
    return this.authService.sigIn(dto);
  }

  @Get('verify')
  @Redirect('', 301)
  verify(@Query() dto: VerifyDto) {
    return this.emailServices.verifyEmail(dto.token);
  }

  @Post('resendEmail')
  resendEmail(@Body() dto: ResendEmailDto) {
    return this.emailServices.resendMail(dto.email);
  }
}
