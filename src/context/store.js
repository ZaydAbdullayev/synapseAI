import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reMode } from "./mode";
import { reAuth } from "./auth";

export const store = configureStore({
  reducer: combineReducers({
    dark: reMode,
    auth: reAuth,
  }),
});
