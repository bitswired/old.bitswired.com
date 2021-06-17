import { UseGuards } from '@nestjs/common';
import {
  Args,
  ArgsType,
  Int,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { BasicAuthGuard } from '../auth/guards/basic-auth.guard';
import { QueryModifiersArgs } from '../commons/types/query-modfiers';
import { BlogPostsService } from './blog-posts.service';
import { CreateBlogPostInput } from './dto/create-blog-post.input';
import { UpdateBlogPostInput } from './dto/update-blog-post.input';
import { BlogPost } from './models/blog-post.model';

@ArgsType()
export class GetBlogPostsArgs extends QueryModifiersArgs(BlogPost, ['tags']) {}

@UseGuards(BasicAuthGuard)
@Resolver(() => BlogPost)
export class BlogPostsResolver {
  constructor(private readonly blogPostsService: BlogPostsService) {}

  @Mutation(() => BlogPost)
  createBlogPost(@Args('blogPost') createBlogPostInput: CreateBlogPostInput) {
    return this.blogPostsService.create(createBlogPostInput);
  }

  @Query(() => [BlogPost], { name: 'blogPosts' })
  findAll(@Args() args: GetBlogPostsArgs) {
    return this.blogPostsService.findAll(args);
  }

  @Mutation(() => BlogPost)
  updateBlogPost(@Args('blogPost') updateBlogPostInput: UpdateBlogPostInput) {
    return this.blogPostsService.update(updateBlogPostInput);
  }

  @Mutation(() => BlogPost)
  removeBlogPost(@Args('id', { type: () => Int }) id: number) {
    return this.blogPostsService.remove(id);
  }
}
