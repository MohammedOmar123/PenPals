import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateFeedbackDto, UpdateFeedbackDto } from './dto';
import { Feedback } from './entities/feedback.entity';
import { CREATE_FEEDBACK, DELETE_FEEDBACK, UPDATE } from '../core/constant';

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

  async remove(id: number, user: { userId: number; role: string }) {
    let isDelete = {};

    if (user.role === 'admin') {
      isDelete = await this.feedbackRepository.destroy({ where: { id } });
    } else {
      isDelete = await this.feedbackRepository.destroy({
        where: { id, userId: user.userId },
      });
    }

    if (!isDelete) {
      throw new NotFoundException("feedback id doesn't exist");
    }

    return { message: DELETE_FEEDBACK };
  }
}
