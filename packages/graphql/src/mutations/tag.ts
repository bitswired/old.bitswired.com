import { gql } from "graphql-tag";
import { CORE_TAG_FIELDS } from "../fragments/tag";

export const CREATE_TAG = gql`
  ${CORE_TAG_FIELDS}

  mutation CreateTag($tag: CreateTagInput!) {
    createTag(tag: $tag) {
      ...CoreTagFields
    }
  }
`;

export const UPDATE_TAG = gql`
  ${CORE_TAG_FIELDS}

  mutation UpdateTag($tag: UpdateTagInput!) {
    updateTag(tag: $tag) {
      ...CoreTagFields
    }
  }
`;
