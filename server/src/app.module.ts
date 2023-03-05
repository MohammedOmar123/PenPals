import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { ViewsModule } from './views/views.module';
import { ProjectsModule } from './projects/projects.module';
import { UserProjectModule } from './user-project/user-project.module';
import { FeedbackModule } from './feedback/feedback.module';
import { CommentsModule } from './comments/comments.module';
import { AuthModule } from './auth/auth.module';
import { NotificationsModule } from './notifications/notifications.module';
import config from './core/database/connection';

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...config,
      synchronize: true,
      autoLoadModels: true,
      logging: false,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    PostsModule,
    ViewsModule,
    ProjectsModule,
    UserProjectModule,
    FeedbackModule,
    CommentsModule,
    AuthModule,
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
