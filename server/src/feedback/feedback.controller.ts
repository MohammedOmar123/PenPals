import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  CacheInterceptor,
  UseInterceptors,
  CacheTTL,
} from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto, UpdateFeedbackDto } from './dto/';
import { JwtAuthGuard } from '../auth/strategy';
import { GetUser } from '../auth/decorators';

import { ParamValidationPipe } from '../core/pipes/ParamValidation.pipe';
@UseGuards(JwtAuthGuard)
@Controller('feedback')
@UseInterceptors(CacheInterceptor)
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}
  @Post()
  create(
    @Body() createFeedbackDto: CreateFeedbackDto,
    @GetUser() { userId }: { userId: number },
  ) {
    return this.feedbackService.create(createFeedbackDto, userId);
  }

  @Get()
  @CacheTTL(60)
  findAll() {
    return this.feedbackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feedbackService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParamValidationPipe) id: number,
    @Body() dto: UpdateFeedbackDto,
    @GetUser() user: { userId: number; role: string },
  ) {
    return this.feedbackService.update(id, user, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feedbackService.remove(+id);
  }
}
