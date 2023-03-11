import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Notification } from './entities/notification.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { User } from '../users/entities';
@Injectable()
export class NotificationService {
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
      attributes: [
        'id',
        'userId',
        'user.firstName' as 'firstName',
        'user.lastName' as 'lastName',
        'user.image' as 'image',
      ],
      nest: false,
      raw: true,
      include: {
        model: this.userRepository,
        attributes: [],
      },
    });

    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  async update(id) {
    const [updated] = await this.notificationRepository.update(
      {
        seen: true,
      },
      {
        where: { id },
      },
    );

    if (!updated) throw new NotFoundException("notification id does't exist");

    return { message: 'notification updated' };
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
