import { BannerAPI } from "../api";
import { FieldError, User } from "../types";
import { Actions, store } from "../state";

// TODO: implement secure storage for me user
// Secure Storage Keys
// const ME_NAME_KEY = "banner-me_name";

export const getMe = async (): Promise<[boolean, FieldError[] | null]> => {
  try {
    let res: User = await BannerAPI.User.getMe();

    // user not found
    if (!res) return [false, null];

    // logged in user found so update store
    store.dispatch({
      type: Actions.MeActions.SET_USER_DATA,
      payload: { user: res },
    });

    // set boolean that user is logged in
    store.dispatch({
      type: Actions.MeActions.LOGGED_IN,
    });
  } catch (error) {
    return [false, null];
  }

  return [true, null];
};
