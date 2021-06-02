import { gql } from "@apollo/client";
import { User } from "../graphql/generator/FabricGQLTypes";
import { client } from "../lib/apollo";

const GET_ME_QUERY = gql`
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

export const getMe = async (): Promise<User> => {
  const meData = await client.query({
    query: GET_ME_QUERY,
  });

  if (meData.errors) throw new Error("Error retrieving data for me user");

  return meData.data as User;
};
