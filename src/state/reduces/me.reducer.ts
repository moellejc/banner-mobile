import {
  UserRoles,
  UserStatuses,
  UserTypes,
} from "../../graphql/generator/BannerGQLTypes";
import { Coordinates } from "../../types/_old/Coordinates";
import { MeActions } from "../actions";

export interface IMeState {
  loggedIn: boolean;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    profilePic: string;
    verified: boolean;
    role: string;
    screenName: string;
    status: string;
    userType: string;
    likes: [];
    media: [];
    posts: [];
    totalFollowers: number;
    totalFollowing: number;
    totalFollowingPlaces: number;
    totalLikes: number;
    totalPosts: number;
    lastActiveAt: string;
    createdAt: string;
  };
  location: Coordinates | null;
}

const initialMeState: IMeState = {
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
    lastActiveAt: "",
    createdAt: "",
  },
  location: null,
};

export function meReducer(state = initialMeState, action: any) {
  switch (action.type) {
    case MeActions.LOGGED_IN:
      return {
        ...state,
        loggedIn: true,
      };
    case MeActions.LOGOUT:
      return initialMeState;
    case MeActions.SET_USER_DATA:
      return {
        ...state,
        user: action.payload.user,
      };
    case MeActions.SET_LOCATION:
      return {
        ...state,
        location: null,
      };
    default:
      return state;
  }
}
