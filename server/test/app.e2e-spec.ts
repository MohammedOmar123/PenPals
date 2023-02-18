import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as pactum from 'pactum';
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
    return pactum.spec().get('http://localhost:4000/users').expectStatus(200);
  });
});

describe('Posts', () => {
  it('should return a list of posts ', () => {
    return pactum.spec().get('http://localhost:4000/posts').expectStatus(200);
  });
});

afterAll(async () => {
  await app.close();
});
