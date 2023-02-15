import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserProjectDto, UpdateUserProjectDto } from './dto/';
import { UserProject } from './entities/user-project.entity';

@Injectable()
export class UserProjectService {
  constructor(
    @InjectModel(UserProject) private userProjectRepository: typeof UserProject,
  ) {}

  create(createUserProjectDto: CreateUserProjectDto) {
    return 'This action adds a new userProject';
  }

  findAll() {
    return this.userProjectRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} userProject`;
  }

  update(id: number, updateUserProjectDto: UpdateUserProjectDto) {
    return `This action updates a #${id} userProject`;
  }

  remove(id: number) {
    return `This action removes a #${id} userProject`;
  }
}
