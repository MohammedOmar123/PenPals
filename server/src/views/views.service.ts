import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateViewDto, UpdateViewDto } from './dto';
import { View } from './entities';

@Injectable()
export class ViewsService {
  constructor(@InjectModel(View) private viewRepository: typeof View) {}
  create(createViewDto: CreateViewDto) {
    return 'This action adds a new view';
  }

  findAll() {
    return this.viewRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} view`;
  }

  update(id: number, updateViewDto: UpdateViewDto) {
    return `This action updates a #${id} view`;
  }

  remove(id: number) {
    return `This action removes a #${id} view`;
  }
}
