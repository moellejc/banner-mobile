import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { APIQueueMiddleware } from "../middleware/apiqueue.middleware";
import rootReducer from "../reduces";

export type RootState = ReturnType<typeof rootReducer>;

const middleware = [
  APIQueueMiddleware,
  ...getDefaultMiddleware<RootState>(),
] as const;

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

// Infer the `RootState` and `AppDispatch` types from the store itself

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
