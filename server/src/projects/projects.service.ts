import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CREATE_PROJECT } from '../core/constant';

import { CreateProjectDto, UpdateProjectDto } from './dto';
import { Project } from './entities';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project) private projectRepository: typeof Project,
  ) {}

  async create(dto: CreateProjectDto) {
    await this.projectRepository.create({
      name: dto.name,
      year: dto.year,
    });

    return CREATE_PROJECT;
  }

  findAll() {
    return this.projectRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
