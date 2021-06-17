import { gql } from "graphql-tag";
import { CORE_BLOGPOST_FIELDS } from "../fragments/blog-post";

export const CREATE_BLOGPOST = gql`
  ${CORE_BLOGPOST_FIELDS}

  mutation CreateBlogPost($blogPost: CreateBlogPostInput!) {
    createBlogPost(blogPost: $blogPost) {
      ...CoreBlogPostFields
    }
  }
`;

export const UPDATE_BLOGPOST = gql`
  ${CORE_BLOGPOST_FIELDS}

  mutation UpdateBlogPost($blogPost: UpdateBlogPostInput!) {
    updateBlogPost(blogPost: $blogPost) {
      ...CoreBlogPostFields
    }
  }
`;
