import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { ValidationPipe } from '@nestjs/common';

import { CREATED_ACCOUNT, INVALID_EMAIL } from '../src/core/constant';

let app: INestApplication;
const adminToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxIiwiZW1haWwiOiJtb2hhbW1lZEBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzczNjU1MzEsImV4cCI6MTY3ODIyOTUzMX0.0CAr66OJZfkoBmW_x_o4sjGWzZ1TkPkudhs0e-V3Zrs';
const studentToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIyIiwiZW1haWwiOiJzYWlmQGdtYWlsLmNvbSIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNjc3MzY2ODcxLCJleHAiOjE2NzgyMzA4NzF9.5nej89I_ZfLaH7HhqYpYX6NtM3T55eOAlrwuphcVo8M';

beforeAll(async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();
  app = moduleFixture.createNestApplication();
  app.useGlobalPipes(new ValidationPipe());
  await app.init();
  // await app.listen(4000);
});

describe('Auth', () => {
  describe('/auth/sign-up', () => {
    const body = {
      firstName: 'سعيد',
      lastName: 'رامي',
      email: 'mohammed@gmail.1com',
      password: 'mohammed12345!',
    };
    it('should return 400 for bad inputs', async () => {
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

    it('should return 201 for valid inputs', async () => {
      const response = await request(app.getHttpServer())
        .post('/auth/sign-up')
        .send({ ...body, email: 'mohammeqe3d@gmail.com' });
      expect(response.body.message).toBe(CREATED_ACCOUNT);
    });

    it('should return 400 when the user add same email again', async () => {
      const response = await request(app.getHttpServer())
        .post('/auth/sign-up')
        .send({ ...body, email: 'mohammeqe3d@gmail.com' });
      expect(response.body.message).toBe(INVALID_EMAIL);
    });
  });

  // signIn
  describe('/auth/sign-in', () => {
    it('should return 400 for bad inputs', async () => {
      const response = await request(app.getHttpServer())
        .post('/auth/sign-in')
        .send({ email: 'invalidEmail@gmai.com', password: '' })
        .expect(400);

      expect(response.body).toEqual({
        statusCode: 400,
        message: ['password should not be empty'],
        error: 'Bad Request',
      });
    });

    it('should return 201 for valid credentials', async () => {
      await request(app.getHttpServer())
        .post('/auth/sign-in')
        .send({ email: 'mohammeqe3d@gmail.com', password: 'mohammed12345!' })
        .expect(201);
    });

    it('should return 403 for invalid credentials ', async () => {
      await request(app.getHttpServer())
        .post('/auth/sign-in')
        .send({ email: 'mohammeqe23d@gmail.com', password: 'mohammed12345!' })
        .expect(403);
    });
  });
});

// Projects
describe('Projects', () => {
  describe('POST api/v1/projects', () => {
    it('should return 201 for valid credentials and inputs', async () => {
      return request(app.getHttpServer())
        .post('/projects')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({
          name: 'بالعربية نرتفي ',
          year: 2001,
        })
        .expect(201);
    });

    it('should return 400 when for bad inputs', async () => {
      return request(app.getHttpServer())
        .post('/projects')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({
          name: 'بالعربية نرتفي ',
        })
        .expect(400);
    });

    it('should return 401 when for unauthorized users', async () => {
      return request(app.getHttpServer())
        .post('/projects')
        .send({})
        .expect(401);
    });

    it('should return 403 for invalid credentials', async () => {
      return request(app.getHttpServer())
        .post('/projects')
        .set('Authorization', `Bearer ${studentToken}`)
        .send({
          name: 'بالعربية نرتفي ',
          year: 2001,
        })
        .expect(403);
    });
  });
});

describe('Feedback', () => {
  describe('POST api/v1/feedback', () => {
    it('should return 401 unauthorized users', () => {
      return request(app.getHttpServer()).post('/feedback').expect(401);
    });

    it('should return 201 for valid inputs', () => {
      return request(app.getHttpServer())
        .post('/feedback') // any valid token will work here
        .set('Authorization', `Bearer ${studentToken}`)
        .send({ content: 'good work' })
        .expect(201);
    });

    it('should return 400 for bad inputs', () => {
      return request(app.getHttpServer())
        .post('/feedback') // any valid token will work here
        .set('Authorization', `Bearer ${studentToken}`)
        .send({ content: 10 })
        .expect(400);
    });
  });
});

// Users
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
