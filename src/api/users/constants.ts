import { gql } from "@apollo/client";

export const GET_ME_QUERY = gql`
  query {
    me {
      id
      firstName
      lastName
      email
      screenName
      profilePic
      role
      status
      userType
      verified
    }
  }
`;
