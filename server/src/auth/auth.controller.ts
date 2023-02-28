import { Controller, Post, Body, Query, Get } from '@nestjs/common';

import { AuthService } from './auth.service';
import { SignupDto, SignInDto, VerifyDto } from './dto';
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
  verify(@Query() dto: VerifyDto) {
    return this.emailServices.verifyEmail(dto.token);
  }
}
