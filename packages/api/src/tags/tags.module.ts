import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrismaModule } from '../prisma/prisma.module';
import { TagEntity } from './entities/tag.entity';
import { TagsResolver } from './tags.resolver';
import { TagsService } from './tags.service';

@Module({
  imports: [PrismaModule, TypeOrmModule.forFeature([TagEntity])],
  providers: [TagsResolver, TagsService],
})
export class TagsModule {}
