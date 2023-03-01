import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  CacheInterceptor,
} from '@nestjs/common';
import { UserProjectService } from './user-project.service';
import { CreateUserProjectDto, UpdateUserProjectDto } from './dto';

@Controller('user-project')
@UseInterceptors(CacheInterceptor)
export class UserProjectController {
  constructor(private readonly userProjectService: UserProjectService) {}

  @Post()
  create(@Body() createUserProjectDto: CreateUserProjectDto) {
    return this.userProjectService.create(createUserProjectDto);
  }

  @Get()
  findAll() {
    return this.userProjectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userProjectService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserProjectDto: UpdateUserProjectDto,
  ) {
    return this.userProjectService.update(+id, updateUserProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userProjectService.remove(+id);
  }
}
