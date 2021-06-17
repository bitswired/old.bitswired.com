import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GetBlogPostsArgs } from './blog-posts.resolver';
import { CreateBlogPostInput } from './dto/create-blog-post.input';
import { UpdateBlogPostInput } from './dto/update-blog-post.input';

@Injectable()
export class BlogPostsService {
  constructor(private prismaService: PrismaService) {}

  create(createBlogPostInput: CreateBlogPostInput) {
    return this.prismaService.blogPost.create({
      data: createBlogPostInput,
    });
  }

  findAll(args: GetBlogPostsArgs) {
    return this.prismaService.blogPost.findMany({
      where: args?.where?._eq,
      include: { tags: true },
    });
  }

  async update(updateBlogPostInput: UpdateBlogPostInput) {
    const { id, tags: t, ...input } = updateBlogPostInput;
    const tags = t ? t : [];

    return await this.prismaService.blogPost.update({
      where: {
        id,
      },
      include: {
        tags: true,
      },
      data: {
        tags: {
          connect: tags.map((x) => ({ id: x })),
        },
        ...input,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} blogPost`;
  }
}
