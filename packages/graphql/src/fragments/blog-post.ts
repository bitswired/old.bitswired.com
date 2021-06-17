import { gql } from "graphql-tag";

export const CORE_BLOGPOST_FIELDS = gql`
  fragment CoreBlogPostFields on BlogPost {
    id
    title
    body
    description
    image
    slug
    published
    publishedAt
    createdAt
    updatedAt
    tags {
      id
      name
    }
  }
`;
