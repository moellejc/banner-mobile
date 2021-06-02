import { Middleware } from "redux";
import { RootState } from "../store";

export const APIQueueMiddleware: Middleware<{}, RootState> = (store) => (
  next
) => (action) => {
  console.log("running action: ");
  console.log(action);
  return next(action);
};
