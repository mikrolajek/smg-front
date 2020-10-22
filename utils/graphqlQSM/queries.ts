import { gql } from "@apollo/client";

export const GET_COMPANIES = gql`
  query {
    company {
      id
      name
    }
  }
`;

export const GET_PRODUCTS = gql`
  query {
    product {
      id
      name
    }
  }
`;


