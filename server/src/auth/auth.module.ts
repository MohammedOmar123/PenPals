import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { User } from '../users/entities';
import { JwtStrategy } from './strategy/jwt.strategy';
import { EmailServices } from './email.service';

@Module({
  imports: [SequelizeModule.forFeature([User]), JwtModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, EmailServices],
})
export class AuthModule {}
