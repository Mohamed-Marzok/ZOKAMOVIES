import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IDetailedMovie } from "../interfaces";

// Async thunk for fetching movies
export const getMovieById = createAsyncThunk(
  "movie/getMovieById",
  async (movieId: string) => {
    try {
      const response = await axios.get(
        `https://omdbapi.com/?apikey=c0587174&i=${movieId}`
      );
      const data = await response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);
// Interface for the movies slice state
interface IState {
  movie: IDetailedMovie | null;
  movieRate: number | null;
}

// Initial state with correct typing
const initialState: IState = {
  movie: null,
  movieRate: null,
};

// Movies slice definition
export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovieRate: (state, action) => {
      state.movieRate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovieById.fulfilled, (state, action) => {
        state.movie = action.payload;
      })
      .addCase(getMovieById.rejected, (_, action) => {
        console.error("Failed to fetch movies:", action.payload);
      });
  },
});
export const { setMovieRate } = movieSlice.actions;
export default movieSlice.reducer;
