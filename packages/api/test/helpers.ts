import {
  CreateBlogPostVariables,
  CreateTagVariables,
  CreateContactVariables,
  GetBlogPostsVariables,
  GetTagsVariables,
  Mutations,
  Queries,
  UpdateBlogPostVariables,
  UpdateTagVariables,
  CreateContact,
} from '@bitswired-web/graphql';
import { PrismaClient } from '@bitswired-web/prisma';
import { INestApplication } from '@nestjs/common';
import { DocumentNode, print } from 'graphql';
import * as request from 'supertest';

export async function clearDatabase() {
  try {
    const prisma = new PrismaClient();
    await prisma.$connect();

    await prisma.tag.deleteMany();
    await prisma.blogPost.deleteMany();

    prisma.$disconnect();
  } catch (err) {
    console.log(err);
  }
}

function appGqlQuery<Variables>(queryOrMutation: DocumentNode) {
  return function (app: INestApplication, variables?: Variables) {
    return request(app.getHttpServer())
      .post('/graphql')
      .auth('admin', 'admin-password')
      .send({
        query: print(queryOrMutation),
        variables,
      });
  };
}

export const appGetBlogPosts = appGqlQuery<GetBlogPostsVariables>(
  Queries.GET_BLOGPOSTS,
);

export const appCreateBlogPost = appGqlQuery<CreateBlogPostVariables>(
  Mutations.CREATE_BLOGPOST,
);

export const appUpdateBlogPost = appGqlQuery<UpdateBlogPostVariables>(
  Mutations.UPDATE_BLOGPOST,
);

export const appGetTags = appGqlQuery<GetTagsVariables>(Queries.GET_TAGS);

export const appCreateTag = appGqlQuery<CreateTagVariables>(
  Mutations.CREATE_TAG,
);

export const appUpdateTag = appGqlQuery<UpdateTagVariables>(
  Mutations.UPDATE_TAG,
);

export const appCreateContact = appGqlQuery<CreateContactVariables>(
  Mutations.CREATE_CONTACT,
);
