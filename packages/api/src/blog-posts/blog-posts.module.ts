import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { TagEntity } from '../tags/entities/tag.entity';
import { BlogPostsResolver } from './blog-posts.resolver';
import { BlogPostsService } from './blog-posts.service';
import { BlogPostEntity } from './entities/blog-post.entity';

@Module({
  imports: [
    PrismaModule,
    TypeOrmModule.forFeature([BlogPostEntity]),
    TypeOrmModule.forFeature([TagEntity]),
    AuthModule,
  ],
  providers: [BlogPostsResolver, BlogPostsService],
})
export class BlogPostsModule {}
