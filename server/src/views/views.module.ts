import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize/';

import { ViewsService } from './views.service';
import { ViewsController } from './views.controller';
import { View } from './entities';

@Module({
  imports: [SequelizeModule.forFeature([View])],
  controllers: [ViewsController],
  providers: [ViewsService],
})
export class ViewsModule {}
