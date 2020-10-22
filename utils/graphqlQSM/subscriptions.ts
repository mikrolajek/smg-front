import { gql } from "@apollo/client";

export const GET_ODDZIALY_SUB = gql`
  subscription {
    location {
      id
      address
      company {
        id
        name
      }
    }
  }
`;
