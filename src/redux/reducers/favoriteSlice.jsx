import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    value: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const newFavorite = { ...action.payload };
      state.value.push(newFavorite);
    },
    removeFavorite: (state, action) => {
      const oldFavorite = { ...action.payload };
      state.value = state.value.filter(
        (favorite) => favorite.id !== oldFavorite.id
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
