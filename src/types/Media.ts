import { MediaTypes } from "../graphql/generator/FabricGQLTypes";
import { Post } from "./Post";
import { User } from "./User";

export type Media = {
  id: string;
  createdAt: Date;
  creator: User;
  creatorID: string;
  mediaIndex: number;
  mediaType: MediaTypes;
  mediaURL: string;
  post?: Post;
  postID: string;
};
