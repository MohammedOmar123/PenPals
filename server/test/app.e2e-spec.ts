import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { ValidationPipe } from '@nestjs/common';

import { CREATED_ACCOUNT, INVALID_EMAIL } from '../src/core/constant';

let app: INestApplication;

beforeAll(async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();
  app = moduleFixture.createNestApplication();
  app.useGlobalPipes(new ValidationPipe());
  await app.init();
  // await app.listen(4000);
});
const body = {
  firstName: 'سعيد',
  lastName: 'رامي',
  email: 'mohammed@gmail.1com',
  password: 'password',
};

describe('Auth', () => {
  it('should return 400 bad request for invalid inputs', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/sign-up')
      .send(body)
      .expect(400);

    expect(response.body).toEqual({
      statusCode: 400,
      message: ['email must be an email'],
      error: 'Bad Request',
    });
  });

  it('should return 201 when the user add valid inputs', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/sign-up')
      .send({ ...body, email: 'mohammeqe3d@gmail.com' });
    expect(response.body.message).toBe(CREATED_ACCOUNT);
  });
});

it('should return 400 when the user add same email again', async () => {
  const response = await request(app.getHttpServer())
    .post('/auth/sign-up')
    .send({ ...body, email: 'mohammeqe3d@gmail.com' });
  expect(response.body.message).toBe(INVALID_EMAIL);
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
