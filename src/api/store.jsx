import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../redux/reducers/favoriteSlice";

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});
