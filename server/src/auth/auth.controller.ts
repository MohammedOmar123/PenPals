import { Controller, Post, Body } from '@nestjs/common';

import { AuthService } from './auth.service';
import { SignupDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  create(@Body() dto: SignupDto) {
    return this.authService.signup(dto);
  }
}
