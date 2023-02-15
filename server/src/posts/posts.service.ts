import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreatePostDto, UpdatePostDto } from './dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private postRepository: typeof Post) {}

  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  async findAll() {
    return await this.postRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
