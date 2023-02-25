import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateFeedbackDto, UpdateFeedbackDto } from './dto';
import { Feedback } from './entities/feedback.entity';
import { CREATE_FEEDBACK } from '../core/constant';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectModel(Feedback) private feedbackRepository: typeof Feedback,
  ) {}

  async create(dto: CreateFeedbackDto, userId: number) {
    await this.feedbackRepository.create({ content: dto.content, userId });
    return { message: CREATE_FEEDBACK };
  }

  findAll() {
    return this.feedbackRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} feedback`;
  }

  update(id: number, updateFeedbackDto: UpdateFeedbackDto) {
    return `This action updates a #${id} feedback`;
  }

  remove(id: number) {
    return `This action removes a #${id} feedback`;
  }
}
