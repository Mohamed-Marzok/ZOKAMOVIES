import { createSlice } from "@reduxjs/toolkit";
import { IDetailedMovie } from "../interfaces";

// Interface for the movies slice state
interface IState {
  movies: IDetailedMovie[];
}

// Initial state with correct typing
const initialState: IState = {
  movies: JSON.parse(localStorage.getItem("yourMovies") || "[]"),
};

// Movies slice definition
export const yourMovieSlice = createSlice({
  name: "yourMovie",
  initialState,
  reducers: {
    addToYourMovieList: (state, action) => {
      const movieExists = state.movies.some(
        (movie) => movie.imdbID === action.payload.movie.imdbID
      );

      if (!movieExists) {
        const newMovie = {
          ...action.payload.movie,
          myrate: action.payload.rate,
        };
        state.movies.push(newMovie);
        localStorage.setItem("yourMovies", JSON.stringify(state.movies));
      }
    },
    removeMovieFromList: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.imdbID !== action.payload
      );
      localStorage.setItem("yourMovies", JSON.stringify(state.movies));
    },
  },
});

export const { addToYourMovieList, removeMovieFromList } =
  yourMovieSlice.actions;
export default yourMovieSlice.reducer;
