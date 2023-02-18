import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

let app: INestApplication;

beforeAll(async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();
  app = moduleFixture.createNestApplication();
  await app.init();
  await app.listen(4000);
});

describe('Users', () => {
  it('should return a list of users', async () => {
    return request(app.getHttpServer()).get('/users').expect(200);
  });
});

describe('Posts', () => {
  it('should return a list of posts ', () => {
    return request(app.getHttpServer()).get('/posts').expect(200);
  });
});

afterAll(async () => {
  await app.close();
});
