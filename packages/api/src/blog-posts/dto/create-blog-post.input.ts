import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBlogPostInput {
  @Field()
  title: string;
}
