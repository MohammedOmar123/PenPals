import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateFeedbackDto, UpdateFeedbackDto } from './dto';
import { Feedback } from './entities/feedback.entity';
import { CREATE_FEEDBACK, UPDATE } from '../core/constant';

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

  async update(
    id: number,
    user: { userId: number; role: string },
    dto: UpdateFeedbackDto,
  ) {
    let updated = [];

    if (user.role === 'admin') {
      updated = await this.feedbackRepository.update(dto, { where: { id } });
    } else {
      updated = await this.feedbackRepository.update(dto, {
        where: { id, userId: user.userId },
      });
    }

    if (!updated[0]) throw new NotFoundException("feedback id doesn't exist");
    else return { message: UPDATE };
  }

  remove(id: number) {
    return `This action removes a #${id} feedback`;
  }
}
