import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import { Tag } from '../../tags/models/tag.model';

@ObjectType()
export class BlogPost {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  body: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  image: string;

  @Field({ nullable: true })
  slug: string;

  @Field()
  published: boolean;

  @Field(() => GraphQLISODateTime, { nullable: true })
  publishedAt: Date;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field(() => [Tag], { nullable: true })
  tags?: Tag[];
}
