import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { ValidationPipe } from '@nestjs/common';

import {
  INVALID_EMAIL,
  CHECK_EMAIL,
  ADMIN_TOKEN,
  STUDENT_TOKEN,
  VERIFICATION_TOKEN,
} from '../src/core/constant';

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
        .send({ ...body, email: 'mohammeqe3d@gmail.com' })
        .expect(201);
      expect(response.body.message).toBe(CHECK_EMAIL);
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
        .send({ email: 'mohammed@gmail.com', password: '123456' })
        .expect(201);
    });

    it('should return 403 for invalid credentials ', async () => {
      await request(app.getHttpServer())
        .post('/auth/sign-in')
        .send({ email: 'mohammeqe23d@gmail.com', password: 'mohammed12345!' })
        .expect(403);
    });
  });

  describe('/auth/verify', () => {
    it('should return 200 for verified email', async () => {
      return await request(app.getHttpServer())
        .get(`/auth/verify?token=${VERIFICATION_TOKEN}`)
        .expect(200);
    });
  });

  it('should return 403 for invalid email', async () => {
    return await request(app.getHttpServer())
      .get(`/auth/verify?token=${VERIFICATION_TOKEN}13`)
      .expect(403);
  });
});

// Projects
describe('Projects', () => {
  describe('POST api/v1/projects', () => {
    it('should return 201 for valid credentials and inputs', async () => {
      return request(app.getHttpServer())
        .post('/projects')
        .set('Authorization', `Bearer ${ADMIN_TOKEN}`)
        .send({
          name: 'بالعربية نرتفي ',
          year: 2001,
        })
        .expect(201);
    });

    it('should return 400 when for bad inputs', async () => {
      return request(app.getHttpServer())
        .post('/projects')
        .set('Authorization', `Bearer ${ADMIN_TOKEN}`)
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
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`)
        .send({
          name: 'بالعربية نرتفي ',
          year: 2001,
        })
        .expect(403);
    });
  });

  describe('PATCH api/v1/projects/:id', () => {
    it('should return 200 for valid credentials', async () => {
      return request(app.getHttpServer())
        .patch('/projects/2')
        .set('Authorization', `Bearer ${ADMIN_TOKEN}`)
        .send({
          name: 'test',
          year: 2005,
        })
        .expect(200);
    });

    it('should return 403 for invalid credentials', async () => {
      return request(app.getHttpServer())
        .patch('/projects/2')
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`)
        .send({
          name: 'test',
          year: 2005,
        })
        .expect(403);
    });

    it('should return 401 for unauthorized users', async () => {
      return request(app.getHttpServer())
        .patch('/projects/2')
        .send({
          name: 'test',
          year: 2005,
        })
        .expect(401);
    });

    it('should return 404 for non-existent projects', async () => {
      return request(app.getHttpServer())
        .patch('/projects/500')
        .set('Authorization', `Bearer ${ADMIN_TOKEN}`)
        .send({
          name: 'test',
          year: 2005,
        })
        .expect(404);
    });

    it('should return 400 for invalid params', async () => {
      return request(app.getHttpServer())
        .patch('/projects/a')
        .set('Authorization', `Bearer ${ADMIN_TOKEN}`)
        .send({
          name: 'test',
          year: 2005,
        })
        .expect(400);
    });
  });

  describe('delete api/v1/projects/:id', () => {
    it('should return 200 for valid credentials', async () => {
      return request(app.getHttpServer())
        .delete('/projects/2')
        .set('Authorization', `Bearer ${ADMIN_TOKEN}`)
        .expect(200);
    });

    it('should return 403 for invalid credentials', async () => {
      return request(app.getHttpServer())
        .delete('/projects/2')
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`)
        .expect(403);
    });

    it('should return 401 for unauthorized users', async () => {
      return request(app.getHttpServer()).delete('/projects/2').expect(401);
    });

    it('should return 404 for non-existent projects', async () => {
      return request(app.getHttpServer())
        .delete('/projects/500')
        .set('Authorization', `Bearer ${ADMIN_TOKEN}`)
        .expect(404);
    });

    it('should return 400 for invalid params', async () => {
      return request(app.getHttpServer())
        .delete('/projects/a')
        .set('Authorization', `Bearer ${ADMIN_TOKEN}`)
        .expect(400);
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
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`)
        .send({ content: 'good work' })
        .expect(201);
    });

    it('should return 400 for bad inputs', () => {
      return request(app.getHttpServer())
        .post('/feedback') // any valid token will work here
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`)
        .send({ content: 10 })
        .expect(400);
    });
  });

  describe('PATCH api/v1/feedback/:id', () => {
    it('should return 200 for valid credentials', async () => {
      return request(app.getHttpServer())
        .patch('/feedback/2')
        .set('Authorization', `Bearer ${ADMIN_TOKEN}`)
        .send({
          content: 'this is a new feedback',
        })
        .expect(200);
    });

    it('should return 200 for valid credentials', async () => {
      return request(app.getHttpServer())
        .patch('/feedback/11')
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`)
        .send({
          content: 'this is a new feedback',
        })
        .expect(200);
    });

    it('should return 404 for invalid credentials', async () => {
      return request(app.getHttpServer())
        .patch('/feedback/2')
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`)
        .send({
          content: 'this is a new feedback',
        })
        .expect(404);
    });

    it('should return 401 when for unauthorized users', async () => {
      return request(app.getHttpServer())
        .patch('/feedback/2')
        .send({
          content: 'this is a new feedback',
        })
        .expect(401);
    });

    it('should return 404 for non-existent feedback', async () => {
      return request(app.getHttpServer())
        .patch('/feedback/500')
        .set('Authorization', `Bearer ${ADMIN_TOKEN}`)
        .send({
          content: 'this is a new feedback',
        })
        .expect(404);
    });

    it('should return 400 for invalid params', async () => {
      return request(app.getHttpServer())
        .patch('/feedback/a')
        .set('Authorization', `Bearer ${ADMIN_TOKEN}`)
        .send({
          content: 'this is a new feedback',
        })
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
