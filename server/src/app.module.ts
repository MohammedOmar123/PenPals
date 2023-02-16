import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { ViewsModule } from './views/views.module';
import { ProjectsModule } from './projects/projects.module';
import { UserProjectModule } from './user-project/user-project.module';
import { FeedbackModule } from './feedback/feedback.module';
import config from './database/connection';

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...config,
      synchronize: true,
      autoLoadModels: true,
    }),
    UsersModule,
    PostsModule,
    ViewsModule,
    ProjectsModule,
    UserProjectModule,
    FeedbackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
