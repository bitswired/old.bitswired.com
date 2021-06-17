import { gql } from "graphql-tag";
import { CORE_BLOGPOST_FIELDS } from "../fragments/blog-post";

export const GET_BLOGPOSTS = gql`
  ${CORE_BLOGPOST_FIELDS}

  query GetBlogPosts($where: WhereBlogPostInput) {
    blogPosts(where: $where) {
      ...CoreBlogPostFields
    }
  }
`;
