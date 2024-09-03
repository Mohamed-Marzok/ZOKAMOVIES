import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./MoviesSlice";
import movieReducer from "./movieSlice";
import yourMovieReducer from "./yourMovieSlice";

// Create and type the store
const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movie: movieReducer,
    yourMovie: yourMovieReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
