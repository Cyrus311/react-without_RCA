import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieService from "./movieService";

const initialState = {
  movies: [],
  selectedMovie: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ""
};

//! Get movies by query
export const getMoviesByQuery = createAsyncThunk(
  "movies/getAllByQuery",
  async (query, thunkAPI) => {
    try {
      const result = await movieService.getMoviesByQuery(query);
      return result;
    } catch (error) {
      const message = error.response || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//! Get movie detail by id
export const getMovieDetail = createAsyncThunk(
  "movies/getDetail",
  async (movieId, thunkAPI) => {
    try {
      const result = await movieService.getMovieDetail(movieId);
      return result;
    } catch (error) {
      const message = error.response || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesByQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMoviesByQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.movies = action.payload.results;
      })
      .addCase(getMoviesByQuery.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.movies = [];
      })
      .addCase(getMovieDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovieDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.selectedMovie = action.payload;
      })
      .addCase(getMovieDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.selectedMovie = {};
      });
  }
});

export const { reset } = movieSlice.actions;
export default movieSlice.reducer;
