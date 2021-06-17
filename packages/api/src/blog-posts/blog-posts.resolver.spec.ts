import { Test, TestingModule } from '@nestjs/testing';
import { BlogPostsResolver } from './blog-posts.resolver';
import { BlogPostsService } from './blog-posts.service';

describe('BlogPostsResolver', () => {
  let resolver: BlogPostsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogPostsResolver, BlogPostsService],
    }).compile();

    resolver = module.get<BlogPostsResolver>(BlogPostsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
