import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  CacheInterceptor,
  UseInterceptors,
  CacheTTL,
} from '@nestjs/common';

import { PostsService } from './posts.service';
import { CreatePostDto, UpdatePostDto } from './dto/';
import { JwtAuthGuard } from '../auth/strategy';
import { RolesGuard } from '../auth/Guards/roles.guard';
import { Roles, GetUser } from '../auth/decorators';
import { Role } from '../auth/enums/role.enum';
@Controller('posts')
@UseInterceptors(CacheInterceptor)
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  // this means that admin and students who are allowed to add posts
  // if you want to check that add >> Role.user
  @Roles(Role.Admin, Role.Student)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(
    @Body() createPostDto: CreatePostDto,
    @GetUser() { userId }: { userId: number },
  ) {
    return this.postsService.create(userId, createPostDto);
  }

  @Get()
  @CacheTTL(60)
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
