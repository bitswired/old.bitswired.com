import { gql } from "graphql-tag";
import { CORE_TAG_FIELDS } from "../fragments/tag";

export const GET_TAGS = gql`
  ${CORE_TAG_FIELDS}

  query GetTags($where: WhereTagInput) {
    tags(where: $where) {
      ...CoreTagFields
    }
  }
`;
