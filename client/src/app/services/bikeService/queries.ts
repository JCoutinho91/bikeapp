import { gql } from "@apollo/client";

export const GET_ALL_BIKES = gql`
  query GetBikes {
    bikes {
      id
      name
      dailyPrice
      monthlyPrice
      year
      fabrication
      thumbnailSrc
      size
    }
  }
`;
