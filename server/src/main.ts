import { NestFactory } from '@nestjs/core';

import * as compression from 'compression';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(compression());
  app.enableCors();
  app.setGlobalPrefix('api/v1/');
  await app.listen(8000);
}
bootstrap();
