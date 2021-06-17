import {
  Args,
  ArgsType,
  Int,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { QueryModifiersArgs } from '../commons/types/query-modfiers';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { Tag } from './models/tag.model';
import { TagsService } from './tags.service';

@ArgsType()
export class GetTagsArgs extends QueryModifiersArgs(Tag) {}

@Resolver(() => Tag)
export class TagsResolver {
  constructor(private readonly tagsService: TagsService) {}

  @Mutation(() => Tag)
  createTag(@Args('tag') createTagInput: CreateTagInput) {
    return this.tagsService.create(createTagInput);
  }

  @Query(() => [Tag], { name: 'tags' })
  findAll(@Args() args: GetTagsArgs) {
    return this.tagsService.findAll(args);
  }

  @Mutation(() => Tag)
  updateTag(@Args('tag') updateTagInput: UpdateTagInput) {
    return this.tagsService.update(updateTagInput);
  }

  @Mutation(() => Tag)
  removeTag(@Args('id', { type: () => Int }) id: number) {
    return this.tagsService.remove(id);
  }
}
