import {
  UserRoles,
  UserStatuses,
  UserTypes,
} from "../../graphql/generator/BannerGQLTypes";
import { Like } from "./Like";
import { Media } from "./Media";
import { Post } from "./Post";

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  profilePic: string;
  verified: boolean;
  role: UserRoles;
  screenName: string;
  status: UserStatuses;
  userType: UserTypes;
  likes?: Array<Like>;
  media?: Array<Media>;
  posts?: Array<Post>;
  totalFollowers?: number;
  totalFollowing?: number;
  totalFollowingPlaces?: number;
  totalLikes?: number;
  totalPosts?: number;
  lastActiveAt: Date;
  createdAt: Date;
};

export interface UserRegisterInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  repassword: string;
  screenName: string;
}

export interface UserLoginInput {
  email: string;
  password: string;
}
