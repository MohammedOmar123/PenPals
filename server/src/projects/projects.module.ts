import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { Project } from './entities';

@Module({
  imports: [SequelizeModule.forFeature([Project])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
