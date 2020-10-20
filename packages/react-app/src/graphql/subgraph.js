import { gql } from "apollo-boost";

export const GET_PAIRS = gql`
  {
    pairs(first: 10, orderBy: createdAtTimestamp, orderDirection: desc) {
      id
      token0 {
        id
        symbol
        name
      }
      token1 {
        id
        symbol
        name
      }
      volumeToken0
      volumeToken1
      txCount
      createdAtTimestamp
      liquidityProviderCount
    }
  }  
`;