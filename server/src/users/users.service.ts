import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateUserDto, GetUsersDto, UpdateUserDto } from './dto';
import { User } from './entities';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async getAll(queryString: GetUsersDto) {
    const whereObj = {};
    if (queryString.fullName) {
      const fullName = queryString.fullName.split(' ');
      if (fullName[0]) whereObj['firstName'] = fullName[0].trim();
      if (fullName[1]) whereObj['lastName'] = fullName[1].trim();
    }

    if (queryString.email) {
      whereObj['email'] = queryString.email;
    }

    return await this.userRepository.findAll({
      where: whereObj,
      attributes: { exclude: ['password'] },
    });
  }

  findAll(id: number) {
    const user = this.userRepository.findOne({
      attributes: {
        exclude: [
          'password',
          'verifyToken',
          'isConfirmed',
          'createdAt',
          'updatedAt',
        ],
      },
      where: { id },
    });
    return user;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
