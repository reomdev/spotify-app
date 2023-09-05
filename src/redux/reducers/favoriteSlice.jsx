import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    value: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const newFavorite = { ...action.payload };
      // newFavorite.favorite = true;
      state.value.push(newFavorite);
    },
    removeFavorite: (state, action) => {
      const oldFavorite = { ...action.payload };
      // oldFavorite.favorite = false;
      state.value = state.value.filter(
        (favorite) => favorite.id !== oldFavorite.id
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
