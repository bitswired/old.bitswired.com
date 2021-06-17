import { gql } from "graphql-tag";

export const CORE_TAG_FIELDS = gql`
  fragment CoreTagFields on Tag {
    id
    name
    createdAt
    updatedAt
  }
`;
