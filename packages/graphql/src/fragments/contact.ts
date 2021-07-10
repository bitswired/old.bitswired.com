import { gql } from "graphql-tag";

export const CORE_CONTACT_FIELDS = gql`
  fragment CoreContactFields on Contact {
    email
    firstName
    lastName
  }
`;
