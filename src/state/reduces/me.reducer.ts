import { meConstants } from "../../constants/state";
import {
  UserRoles,
  UserStatuses,
  UserTypes,
} from "../../graphql/generator/FarbicGQLTypes";
import { Coordinates } from "../../types/Coordinates";
import { User } from "../../types/User";

interface MeState {
  loggedIn: boolean;
  user: User;
  location: Coordinates | null;
}

const initialMeState: MeState = {
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
  location: null,
};

export function meReducer(state = initialMeState, action: any) {
  switch (action.type) {
    case meConstants.LOGIN:
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
      };
    case meConstants.LOGOUT:
      return initialMeState;
    case meConstants.SET_LOCATION:
      return {
        ...state,
        location: null,
      };
    default:
      return state;
  }
}
