import { createSlice } from "@reduxjs/toolkit";
import favoriteService from "./favoriteService";

const initialState = {
  favorites: [],
  count: 0,
  message: ""
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    reset: (state) => initialState,
    addFavorite: (state, action) => {
      const result = favoriteService.addFavorite(action.payload);
      if (result) {
        state.favorites.push(action.payload);
        state.count++;
      }
    },
    getFavorites: (state, action) => {
      const favorites = favoriteService.getAllFavorite();
      state.favorites = favorites;
      state.count = favorites.length;
    },
    deleteFavorite: (state, action) => {
      favoriteService.deleteFavorite(action.payload);
      const newFavorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload
      );
      state.favorites = newFavorites;
      state.count--;
    }
  }
});

export const { reset, addFavorite, getFavorites, deleteFavorite } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
