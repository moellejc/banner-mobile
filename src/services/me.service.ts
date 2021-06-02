import { FabricAPI } from "../api";
import { FieldError, User } from "../graphql/generator/FabricGQLTypes";
import { Actions, store } from "../state";

export const getMe = async (): Promise<[boolean, FieldError[] | null]> => {
  try {
    let res: User = await FabricAPI.User.getMe();

    // user not found
    if (!res) return [false, null];

    // logged in user found so update store
    store.dispatch({
      type: Actions.MeActions.SET_USER_DATA,
      payload: { user: res },
    });
  } catch (error) {
    return [false, null];
  }

  return [true, null];
};
