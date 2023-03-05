import { Controller, Post, Body, Query, Get, Res } from '@nestjs/common';
import { Response } from 'express';

import { LOGOUT, LOGIN } from '../core/constant';
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
  async login(@Body() dto: SignInDto, @Res() res: Response) {
    const token = await this.authService.sigIn(dto);
    res
      .cookie('token', token, { httpOnly: true })
      .status(201)
      .json({ message: LOGIN });
  }

  @Get('verify')
  async verify(@Query() dto: VerifyDto, @Res() res: Response) {
    const url = await this.emailServices.verifyEmail(dto.token);
    res
      .cookie('token', dto.token, { httpOnly: true })
      .status(301)
      .redirect(url);
  }

  @Post('resend-email')
  resendEmail(@Body() dto: ResendEmailDto) {
    return this.emailServices.resendMail(dto.email);
  }

  @Post('sign-out')
  signOut(@Res() res: Response) {
    res.clearCookie('token').status(200).json({ message: LOGOUT });
  }
}
