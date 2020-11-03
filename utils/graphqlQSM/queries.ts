import { gql } from "@apollo/client";

export const GET_COMPANIES = gql`
  query {
    company {
      id
      name
    }
  }
`;

export const GET_LOCATIONS = gql`
  query {
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

export const GET_PRODUCTS = gql`
  query {
    product {
      id
      name
    }
  }
`;

export const GET_LINKS = gql`
  query {
    group(distinct_on: id_link) {
      id
      location {
        company {
          name
        }
      }
      product {
        id
        name
      }
      link {
        id
        url
      }
    }
  }
`;

export const GET_TAG_POPULARITY = gql`
  query {
    popularity: tag_popularity {
      count
      type
    }
  }
`;

export const GET_PHONE_POPULARITY = gql`
  query {
    popularity: phone_popularity {
      count
      type: device_type
    }
  }
`;

export const GET_PRODUCT_POPULARITY = gql`
  query {
    popularity: product_popularity(limit: 5) {
      count
      type: name
    }
  }
`;

export const GET_COMPANY_ENGAGEMENT = gql`
  query {
    popularity: company_engagement {
      count
      type: company_name
    }
  }
`;

export const GET_LOCATION_ENGAGEMENT = gql`
  query {
    popularity: location_engagement {
      company_name
      type: address
      count
    }
  }
`;

export const GET_SINGLE_PRODUCT_LOCATIONS = gql`
  query SingleProduct($id: Int!) {
    product_by_pk(id: $id) {
      name
      groups(distinct_on: id_location) {
        location {
          id
          address
          company {
            name
          }
        }
        link {
          url
        }
      }
    }
  }
`;

export const GET_SINGLE_LINK = gql`
  query SingleLink($id: Int!) {
    link_by_pk(id: $id) {
      id
      url
      groups(distinct_on: id_location) {
        location {
          id
          address
          company {
            name
          }
        }
      }
    }
  }
`;

export const GET_SINGLE_PRODUCT_CODES = gql`
  query SingleProduct($id: Int!) {
    product_by_pk(id: $id) {
      groups {
        code {
          id
          type
          uid
        }
      }
    }
  }
`;

export const GET_SINGLE_PRODUCT_LINKS = gql`
  query SingleProduct($id: Int!) {
    product_by_pk(id: $id) {
      groups(distinct_on: id_link) {
        from_date
        link {
          id
          url
        }
      }
    }
  }
`;

export const GET_SINGLE_LOCATION_PRODUCTS = gql`
  query SingleLocation($id: Int!) {
    location_by_pk(id: $id) {
      id
      groups(distinct_on: id_product) {
        id
        product {
          name
          id
        }
      }
    }
  }
`;
export const GET_SINGLE_LOCATION = gql`
  query SingleLocation($id: Int!) {
    location_by_pk(id: $id) {
      id
      address
      company {
        id
        name
      }
    }
  }
`;

export const GET_SINGLE_LINK_CODES = gql`
  query SingleLinkCodes($id: Int!) {
    link_by_pk(id: $id) {
      groups(distinct_on: id_code) {
        id
        link {
          id
          url
        }
        code {
          id
          type
          uid
        }
        product {
          id
          name
        }
      }
    }
  }
`;

export const GET_SINGLE_LINK_PRODUCTS = gql`
  query SingleLink($id: Int!) {
    link_by_pk(id: $id) {
      id
      groups(distinct_on: id_product) {
        id
        id_product
        link {
          id
          id
          url
        }
        product {
          id
          name
        }
      }
    }
  }
`;

export const GET_SINGLE_LINK_LOCATIONS = gql`
  query SingleLink($id: Int!) {
    link_by_pk(id: $id) {
      id
      groups(distinct_on: id_location) {
        id
        id_location
        location {
          id
          address
          company {
            id
            name
          }
        }
      }
    }
  }
`;
