import { GET_ME_QUERY } from "./constants";
import { User } from "../../graphql/generator/BannerGQLTypes";
import { client } from "../../lib/apollo";

export const getMe = async (): Promise<User> => {
  const meData = await client.query({
    query: GET_ME_QUERY,
  });

  if (meData.errors) throw new Error("Error retrieving data for me user");

  return meData.data as User;
};
