import { Like } from "../graphql";
import { Coordinates } from "./Coordinates";
import { Media } from "./Media";
import { PostReply } from "./PostReply";
import { User } from "./User";

export type Post = {
  id: string;
  coordinates: Coordinates;
  createdAt: Date;
  creator: User;
  creatorID: string;
  likeCount?: number;
  likes: Array<Like>;
  media: Array<Media>;
  replies: Array<PostReply>;
  replyCount: number;
  text: string;
};
