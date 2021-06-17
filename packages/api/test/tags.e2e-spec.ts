import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import {
  appCreateTag,
  appGetTags,
  appUpdateTag,
  clearDatabase,
} from './helpers';

describe('Tags', () => {
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

  it('Create a Tag successfully', async () => {
    const res = await appCreateTag(app, { tag: { name: 'TypeScript' } }).expect(
      200,
    );

    expect(res.body.data.createTag).toEqual(
      expect.objectContaining({
        name: 'TypeScript',
      }),
    );
  });

  it('Create multiple blogposts and retieve one successfully', async () => {
    let res;
    for (let index = 0; index < 5; index++) {
      res = await appCreateTag(app, { tag: { name: 'TypeScript' } }).expect(
        200,
      );
    }

    const lastId = res.body.data.createTag.id;

    const retrieved = await appGetTags(app, {
      where: { _eq: { id: lastId } },
    });
    expect(retrieved.body.data.tags[0].id).toEqual(lastId);
  });

  it('Update a blogpost', async () => {
    const res = await appCreateTag(app, { tag: { name: 'TypeScript' } }).expect(
      200,
    );

    const id = res.body.data.createTag.id;

    const updated = await appUpdateTag(app, {
      tag: {
        id,
        name: 'Updated',
      },
    });
    expect(updated.body.data.updateTag.name).toEqual('Updated');
  });

  afterAll(async () => {
    await app.close();
    await clearDatabase();
  });
});
