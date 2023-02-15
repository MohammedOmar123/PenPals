import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize/';

import { UserProjectService } from './user-project.service';
import { UserProjectController } from './user-project.controller';
import { UserProject } from './entities';

@Module({
  imports: [SequelizeModule.forFeature([UserProject])],
  controllers: [UserProjectController],
  providers: [UserProjectService],
})
export class UserProjectModule {}
