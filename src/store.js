import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import movieReducer from "./services/movies/movieSlice";
import favoriteReducer from "./services/favorites/favoriteSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    movies: movieReducer,
    favorites: favoriteReducer
  }
});
