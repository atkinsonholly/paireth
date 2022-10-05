import { gql } from '@apollo/client';

export const GET_PAIRS = gql`
  query GetPairs {
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
`

// TODO:
export const GET_PAIRS_MATCHING_ONE_TOKEN = gql`
  query Pair($token0: String!) {
    pairs {
      id
      token0(where: { id: $token0 }) {
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

