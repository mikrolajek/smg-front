import { gql } from "@apollo/client";

export const GET_COMPANIES = gql`
  {
    company {
      id
      name
    }
  }
`;

export const GET_LOCATIONS = gql`
  {
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
  {
    product {
      id
      name
    }
  }
`;

export const GET_LINKS = gql`
  {
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
  {
    popularity: tag_popularity {
      count
      type
    }
  }
`;

export const GET_TAG_POPULARITY_WITH_DATES = gql`
  query TagtPopularityWithDatesTop5($fromDate: date!, $toDate: date!) {
    popularity: tag_popularity_with_dates(
      args: { fromdate: $fromDate, todate: $toDate }
      limit: 5
    ) {
      count
      type
    }
  }
`;

export const GET_PHONE_POPULARITY = gql`
  {
    popularity: phone_popularity {
      count
      type: device_type
    }
  }
`;

export const GET_PHONE_POPULARITY_WITH_DATES = gql`
  query PhonePopularityWithDates($fromDate: date!, $toDate: date!) {
    popularity: phone_popularity_with_dates(
      args: { fromdate: $fromDate, todate: $toDate }
    ) {
      count
      type: device_type
    }
  }
`;

export const GET_PRODUCT_POPULARITY = gql`
  {
    popularity: product_popularity(limit: 5) {
      count
      type: name
    }
  }
`;

export const GET_ALL_PRODUCT_POPULARITY = gql`
  {
    popularity: product_popularity {
      count
      type: name
    }
  }
`;

export const GET_PRODUCT_POPULARITY_WITH_DATES = gql`
  query ProductPopularityWithDates($fromDate: date!, $toDate: date!) {
    popularity: product_popularity_with_dates(
      args: { fromdate: $fromDate, todate: $toDate }
    ) {
      count
      type: name
    }
  }
`;

export const GET_PRODUCT_POPULARITY_WITH_DATES_TOP_FIVE = gql`
  query ProductPopularityWithDatesTop5($fromDate: date!, $toDate: date!) {
    popularity: product_popularity_with_dates(
      args: { fromdate: $fromDate, todate: $toDate }
      limit: 5
    ) {
      count
      type: name
    }
  }
`;

export const GET_COMPANY_ENGAGEMENT = gql`
  {
    popularity: company_engagement {
      count
      type: company_name
    }
  }
`;

export const GET_COMPANY_ENGAGEMENT_WITH_DATES = gql`
  query CompanyEngagementWithDates($fromDate: date!, $toDate: date!) {
    popularity: company_engagement_with_dates(
      args: { fromdate: $fromDate, todate: $toDate }
    ) {
      count
      type: company_name
    }
  }
`;

export const GET_LOCATION_ENGAGEMENT = gql`
  {
    popularity: location_engagement {
      company_name
      type: address
      count
    }
  }
`;

export const GET_LOCATION_ENGAGEMENT_WITH_DATES = gql`
  query LocationEngagementWithDates($fromDate: date!, $toDate: date!) {
    popularity: location_engagement_with_dates(
      args: { fromdate: $fromDate, todate: $toDate }
    ) {
      type: address
      company_name
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
  query SingleProductCodes($id: Int!) {
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
  query SingleProductLinks($id: Int!) {
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
  query SingleLocationProducts($id: Int!) {
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
  query SingleLinkProducts($id: Int!) {
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
  query SingleLinkLocations($id: Int!) {
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

export const GET_SINGLE_COMPANY = gql`
  query SingleCompany($id: Int!) {
    company_by_pk(id: $id) {
      id
      name
      locations {
        id
        address
      }
    }
  }
`;

export const GET_SINGLE_COMPANY_PRODUCTS = gql`
  query SingleCompanyProducts($id: Int!) {
    group(
      where: { location: { company: { id: { _eq: $id } } } }
      distinct_on: id_product
    ) {
      product {
        id
        name
      }
    }
  }
`;

export const GET_SINGLE_COMPANY_LOCATIONS = gql`
  query SingleCompanyLocations($id: Int!) {
    company_by_pk(id: $id) {
      locations {
        id
        address
      }
    }
  }
`;
