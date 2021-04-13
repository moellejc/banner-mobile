import { Post } from "./Post";
import { User } from "./User";
export type Like = {
  createdAt: Date;
  id: string;
  post?: Post;
  postID: string;
  user: User;
  userID: string;
};
