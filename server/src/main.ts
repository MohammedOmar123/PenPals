import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import * as compression from 'compression';

import { AppModule } from './app.module';
import { AllExceptionsFilter } from './core/HttpExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(compression());
  app.enableCors();
  app.setGlobalPrefix('api/v1/');
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8000);
}
bootstrap();
