import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import {
  appCreateBlogPost,
  appCreateTag,
  appGetBlogPosts,
  appUpdateBlogPost,
  clearDatabase,
} from './helpers';

describe('Blog posts', () => {
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

  it('Create a BlogPost successfully', async () => {
    const res = await appCreateBlogPost(app, { blogPost: { title: 'Test' } });

    expect(res.body.data.createBlogPost).toEqual(
      expect.objectContaining({
        title: 'Test',
      }),
    );
  });

  it('Create multiple blogposts and retieve one successfully', async () => {
    let res;
    for (let index = 0; index < 5; index++) {
      res = await appCreateBlogPost(app, {
        blogPost: { title: 'Test' },
      }).expect(200);
    }

    const lastId = res.body.data.createBlogPost.id;

    const retrieved = await appGetBlogPosts(app, {
      where: { _eq: { id: lastId } },
    });
    expect(retrieved.body.data.blogPosts[0].id).toEqual(lastId);
  });

  it('Update a blogpost', async () => {
    const res = await appCreateBlogPost(app, {
      blogPost: { title: 'Test' },
    }).expect(200);

    const id = res.body.data.createBlogPost.id;

    const updated = await appUpdateBlogPost(app, {
      blogPost: {
        id,
        title: 'Updated',
        body: null,
      },
    });
    expect(updated.body.data.updateBlogPost.title).toEqual('Updated');
  });

  afterAll(async () => {
    await app.close();
    await clearDatabase();
  });
});

describe('Blog posts and tags', () => {
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

  it('Create a BlogPost successfully', async () => {
    const blogPost = await appCreateBlogPost(app, {
      blogPost: { title: 'Test' },
    })
      .expect(200)
      .then((res) => res.body.data.createBlogPost);

    const tag1 = await appCreateTag(app, { tag: { name: 'TypeScript' } })
      .expect(200)
      .then((res) => res.body.data.createTag);
    const tag2 = await appCreateTag(app, { tag: { name: 'Python' } })
      .expect(200)
      .then((res) => res.body.data.createTag);

    await appUpdateBlogPost(app, {
      blogPost: {
        id: blogPost.id,
        tags: [tag1.id, tag2.id],
      },
    });

    const updated = await appGetBlogPosts(app);

    expect(updated.body.data.blogPosts[0].tags).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'TypeScript' }),
        expect.objectContaining({ name: 'Python' }),
      ]),
    );
  });

  afterAll(async () => {
    await app.close();
    await clearDatabase();
  });
});
