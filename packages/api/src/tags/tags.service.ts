import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { GetTagsArgs } from './tags.resolver';

@Injectable()
export class TagsService {
  constructor(private prismaService: PrismaService) {}

  create(createTagInput: CreateTagInput) {
    return this.prismaService.tag.create({
      data: createTagInput,
    });
  }

  findAll(args: GetTagsArgs) {
    return this.prismaService.tag.findMany({
      where: args?.where?._eq,
    });
  }

  async update(updateTagInput: UpdateTagInput) {
    const { id, ...input } = updateTagInput;
    return this.prismaService.tag.update({
      where: {
        id,
      },
      data: {
        ...input,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
