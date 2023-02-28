import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config';

import * as nodemailer from 'nodemailer';

import { User } from '../users/entities';
import { getVerificationPage } from '../core/verificationMailPage';
import {
  EMAIL,
  PASS,
  SENDER,
  EMAIL_VERIFICATION,
  EMAIL_VERIFIED_SUCCESSFULLY,
} from '../core/constant';

@Injectable()
export class EmailServices {
  private transporter: nodemailer.Transporter;

  constructor(
    private configService: ConfigService,
    @InjectModel(User) private userRepository: typeof User,
  ) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.configService.get(EMAIL),
        pass: this.configService.get(PASS),
      },
    });
  }

  async sendMail(email: string, verifyToken: string) {
    await this.transporter.sendMail({
      from: `"${SENDER}" <${this.configService.get(EMAIL)}>`,
      to: email,
      subject: EMAIL_VERIFICATION,
      html: getVerificationPage(verifyToken),
    });
  }

  async verifyEmail(verifyToken: string) {
    const [affectedRows] = await this.userRepository.update(
      {
        isConfirmed: true,
      },
      {
        where: { verifyToken },
      },
    );

    if (!affectedRows) throw new ForbiddenException();
    return { message: EMAIL_VERIFIED_SUCCESSFULLY };
  }
}
