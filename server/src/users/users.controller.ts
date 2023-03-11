import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto, GetUsersDto, UpdateUserDto } from './dto/';
import { JwtAuthGuard } from '../auth/strategy/jwt-auth-guard';
import { GetUser, Roles } from '../auth/decorators';
import { Role } from '../auth/enums/role.enum';
import { RolesGuard } from 'src/auth/Guards/roles.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  getAll(@Query() queryString: GetUsersDto) {
    return this.usersService.getAll(queryString);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  findAll(@GetUser() { userId }: { userId: number }) {
    return this.usersService.findAll(userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
