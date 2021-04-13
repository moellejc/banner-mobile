import { userConstants } from "../../constants/state";
import {
  UserRoles,
  UserStatuses,
  UserTypes,
} from "../../graphql/generator/FarbicGQLTypes";
import { User } from "../../types/User";

interface UserState {
  user: User;
  token: string;
}

const initialUserState: UserState = {
  user: {
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    profilePic: "",
    verified: false,
    role: UserRoles.Basic,
    screenName: "",
    status: UserStatuses.Active,
    userType: UserTypes.Standard,
    likes: [],
    media: [],
    posts: [],
    totalFollowers: 0,
    totalFollowing: 0,
    totalFollowingPlaces: 0,
    totalLikes: 0,
    totalPosts: 0,
    lastActiveAt: new Date(),
    createdAt: new Date(),
  },
  token: "",
};

const initialState = {};

export function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return state;
    default:
      return state;
  }
}
