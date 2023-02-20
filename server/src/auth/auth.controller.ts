import { Controller, Post, Body } from '@nestjs/common';

import { AuthService } from './auth.service';
import { SignupDto, SignInDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  signup(@Body() dto: SignupDto) {
    return this.authService.signup(dto);
  }

  @Post('sign-in')
  login(@Body() dto: SignInDto) {
    return this.authService.sigIn(dto);
  }
}
