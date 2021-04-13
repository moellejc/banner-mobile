import { userConstants } from "../../constants/state";
import {
  UserRoles,
  UserStatuses,
  UserTypes,
} from "../../graphql/generator/FarbicGQLTypes";
import { User } from "../../types/User";

// let user = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? { loggedIn: true, user } : {};
interface UserState {
  loggedIn: boolean;
  user: User;
  token: string;
}

const initialUserState: UserState = {
  loggedIn: false,
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

export function authReducer(state = initialUserState, action: any) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {
        loggedIn: true,
        user: action.user,
        token: action.token,
      };
    case userConstants.LOGIN_REQUEST:
      return {
        loggedIn: true,
        user: action.user,
        token: action.token,
      };
    case userConstants.LOGOUT:
      return {
        loggingIn: false,
      };
    default:
      return state;
  }
}
