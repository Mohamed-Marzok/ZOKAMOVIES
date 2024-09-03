import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IBaseMovie } from "../interfaces";

// Async thunk for fetching movies
export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (word: string) => {
    if (word.length >= 3) {
      try {
        const response = await axios.get(
          `
https://omdbapi.com/?apikey=c0587174&s=${word}`
        );
        const data = await response.data;
        console.log(data);
        return data.Search as IBaseMovie[];
      } catch (error) {
        console.error(error);
      }
    }
  }
);

// Interface for the movies slice state
interface IState {
  movies: IBaseMovie[];
  id: string | null;
}

// Initial state with correct typing
const initialState: IState = {
  movies: [],
  id: null,
};

// Movies slice definition
export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setId: (state, action) => {
      if (state.id !== action.payload) {
        state.id = action.payload;
      } else {
        state.id = null;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.fulfilled, (state, action) => {
        state.movies = action.payload || [];
      })
      .addCase(getMovies.rejected, (_, action) => {
        console.error("Failed to fetch movies:", action.payload);
      });
  },
});

export const { setId } = moviesSlice.actions;

export default moviesSlice.reducer;
