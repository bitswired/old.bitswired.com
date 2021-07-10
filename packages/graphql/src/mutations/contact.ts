import { gql } from "graphql-tag";
import { CORE_CONTACT_FIELDS } from "../fragments/contact";

export const CREATE_CONTACT = gql`
  ${CORE_CONTACT_FIELDS}

  mutation CreateContact($contact: CreateContactInput!) {
    createContact(contact: $contact) {
      ...CoreContactFields
    }
  }
`;
