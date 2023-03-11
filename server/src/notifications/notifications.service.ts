import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Notification } from './entities/notification.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { User } from '../users/entities';
@Injectable()
export class NotificationsService {
  constructor(
    @InjectModel(Notification)
    private notificationRepository: typeof Notification,

    @InjectModel(User) private userRepository: typeof User,
  ) {}
  async create({ postId, type }: CreateNotificationDto, userId) {
    await this.notificationRepository.create({
      postId,
      userId,
      type,
    });

    return { message: 'notification added successfully' };
  }

  async findAll() {
    const data = await this.notificationRepository.findAll({
      attributes: ['id'],
      include: [
        {
          model: this.userRepository,
          // as: 'User',
          attributes: ['firstName', 'lastName', 'image'],
        },
      ],
    });

    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  async update(id) {}

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
