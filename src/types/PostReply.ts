import { Post } from "../graphql/generator/BannerGQLTypes";
import { User } from "./User";

export type PostReply = {
  createdAt: Date;
  creator: User;
  creatorID: string;
  id: string;
  parentReply?: PostReply;
  parentReplyId?: string;
  post: Post;
  postID: string;
  replies?: Array<PostReply>;
  totalReplies?: number;
};
