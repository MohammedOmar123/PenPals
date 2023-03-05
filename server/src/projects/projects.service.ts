import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CREATE_PROJECT, UPDATE, DELETE_project } from '../core/constant';

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

    return { message: CREATE_PROJECT };
  }

  findAll() {
    return this.projectRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  async update(id: number, dto: UpdateProjectDto) {
    const [updated] = await this.projectRepository.update(dto, {
      where: { id },
    });

    if (!updated) throw new NotFoundException('the project id does not exist');

    return { message: UPDATE };
  }

  async remove(id: number) {
    const deleted = await this.projectRepository.destroy({ where: { id } });

    if (!deleted) throw new NotFoundException('the project id does not exist');

    return { message: DELETE_project };
  }
}
