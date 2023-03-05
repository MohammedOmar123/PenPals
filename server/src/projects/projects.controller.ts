import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  CacheInterceptor,
  CacheTTL,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto, UpdateProjectDto } from './dto';
import { Roles } from '../auth/decorators';
import { Role } from '../auth/enums/role.enum';
import { JwtAuthGuard } from '../auth/strategy';
import { RolesGuard } from '../auth/Guards/roles.guard';
import { ParamValidationPipe } from '../core/pipes/ParamValidation.pipe';

@Roles(Role.Admin)
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('projects')
@UseInterceptors(CacheInterceptor)
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}
  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @Get()
  @CacheTTL(60)
  findAll() {
    return this.projectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParamValidationPipe) id: number,
    @Body() dto: UpdateProjectDto,
  ) {
    return this.projectsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParamValidationPipe) id: number) {
    return this.projectsService.remove(id);
  }
}
