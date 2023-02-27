import {
  Injectable,
  BadRequestException,
  ForbiddenException,
  HttpException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config/';
import { JwtService } from '@nestjs/jwt';
import * as nodemailer from 'nodemailer';
import * as bcrypt from 'bcrypt';
import { SignInDto, SignupDto } from './dto/';
import { User } from '../users/entities';
import { getVerificationPage } from '../core/verificationMailPage';
import {
  JWT_KEY,
  EMAIL,
  PASS,
  CHECK_EMAIL,
  INVALID_EMAIL,
  SENDER,
  INVALID_CREDENTIALS,
  EMAIL_VERIFICATION,
  EMAIL_VERIFIED_SUCCESSFULLY,
} from '../core/constant';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {}
  async signup(dto: SignupDto) {
    try {
      const { email, password } = dto;

      const isEmailExist = await this.userRepository.findOne({
        where: { email },
      });

      if (isEmailExist) throw new BadRequestException(INVALID_EMAIL);

      const hashed = await bcrypt.hash(password, 10);

      const secretKey = this.configService.get(JWT_KEY);
      const verifyToken = await this.jwtService.signAsync(email, {
        secret: secretKey,
      });

      await this.userRepository.create({
        ...dto,
        password: hashed,
        role: 'user',
        verifyToken,
      });

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: this.configService.get(EMAIL),
          pass: this.configService.get(PASS),
        },
      });

      await transporter.sendMail({
        from: `"${SENDER}" <${this.configService.get(EMAIL)}>`,
        to: email,
        subject: EMAIL_VERIFICATION,
        html: getVerificationPage(verifyToken),
      });

      // response
      return { message: CHECK_EMAIL };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      } else if (error.name === 'SequelizeUniqueConstraintError') {
        throw new BadRequestException(INVALID_EMAIL);
      } else {
        throw error;
      }
    }
  }

  async sigIn(dto: SignInDto) {
    const { email, password } = dto;

    const user = await this.userRepository.findOne({
      where: { email, isConfirmed: true },
    });

    if (!user) throw new ForbiddenException(INVALID_CREDENTIALS);

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) throw new ForbiddenException(INVALID_CREDENTIALS);

    const secret = this.configService.get(JWT_KEY);
    const accessToken = await this.jwtService.signAsync(
      {
        id: user.id,
        email: user.id,
        role: user.role,
      },
      {
        expiresIn: '10d',
        secret,
      },
    );
    return { accessToken };
  }

  async verifyEmail(verifyToken: string) {
    const [user] = await this.userRepository.update(
      {
        isConfirmed: true,
      },
      {
        where: { verifyToken },
      },
    );

    if (!user) throw new ForbiddenException();
    return { message: EMAIL_VERIFIED_SUCCESSFULLY };
  }
}
