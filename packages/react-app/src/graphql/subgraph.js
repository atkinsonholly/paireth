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

// query plan($id: String!) {
//   healthPlanByID(plan_id: $id){plan_type,
//       name, plan_rate, plan_id
//       plan_provider{
//           Provider{
//               provider_id,
//               name
//           }
//       }
//   }
// }

// TODO:
export const GET_PAIRS_MATCHING_ONE_TOKEN = gql`
  query getPairsMatchingOneToken($token0: String!) {
    pairs(token0: $token0, orderBy: createdAtTimestamp, orderDirection: desc) {
      id
      token0(id: $token0) {
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

