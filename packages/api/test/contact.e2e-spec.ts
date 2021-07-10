import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { appCreateContact, clearDatabase } from './helpers';

describe('Newsletter', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());

    await app.init();
  });

  beforeEach(async () => {
    await clearDatabase();
  });

  it('Should fail to register a user successfully because of wrong email', async () => {
    const res = await appCreateContact(app, {
      contact: { email: 'test.com', firstName: 'test', lastName: 'test' },
    }).expect(200);

    expect(res.body).toEqual(
      expect.objectContaining({
        errors: expect.any(Array),
      }),
    );
  });

  it('Should register a user successfully', async () => {
    const res = await appCreateContact(app, {
      contact: { email: 'test@test.com', firstName: 'test', lastName: 'test' },
    }).expect(200);

    expect(res.body.data.createContact).toEqual(
      expect.objectContaining({
        email: 'test@test.com',
        firstName: 'test',
        lastName: 'test',
      }),
    );
  });

  afterAll(async () => {
    await app.close();
    await clearDatabase();
  });
});
