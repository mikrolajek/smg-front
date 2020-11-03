import { gql } from "@apollo/client";

export const ADD_BRANCH = gql`
  mutation insert_branch_one($branch: branch_insert_input!) {
    insert_branch_one(object: $branch) {
      id
      address
      id_company
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation insert_product_one($product: product_insert_input!) {
    insert_product_one(object: $product) {
      id
      name
    }
  }
`;

export const ADD_COMPANY = gql`
  mutation insert_company_one($company: company_insert_input!) {
    insert_company_one(object: $company) {
      id
      name
    }
  }
`;

export const UPDATE_LINK_URL = gql`
  mutation UpdateLink($id: Int!, $url: String!) {
    update_link_by_pk(pk_columns: { id: $id }, _set: { url: $url }) {
      id
      url
    }
  }
`;
