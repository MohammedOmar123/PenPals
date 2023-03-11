import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  CacheInterceptor,
  CacheTTL,
  UseGuards,
} from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { Roles } from '../auth/decorators';
import { Role } from '../auth/enums/role.enum';
import { JwtAuthGuard } from '../auth/strategy';
import { RolesGuard } from '../auth/Guards/roles.guard';
import { GetUser } from '../auth/decorators';
import { ParamValidationPipe } from 'src/core/pipes/ParamValidation.pipe';

@Roles(Role.Student)
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('notifications')
@UseInterceptors(CacheInterceptor)
export class NotificationController {
  constructor(private readonly notificationsService: NotificationService) {}

  @Roles(Role.Student)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(
    @GetUser() { userId }: { userId: string },
    @Body() dto: CreateNotificationDto,
  ) {
    return this.notificationsService.create(dto, userId);
  }

  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  @CacheTTL(60)
  findAll() {
    return this.notificationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificationsService.findOne(+id);
  }

  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  update(@Param('id', ParamValidationPipe) id: number) {
    return this.notificationsService.update(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationsService.remove(+id);
  }
}
