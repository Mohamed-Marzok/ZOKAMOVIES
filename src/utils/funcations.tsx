import { IDetailedMovie } from "../interfaces";

export const calculateTheAvgMoviesRate = (movies: IDetailedMovie[]) => {
  return (
    movies.reduce((acc, movie) => {
      return (acc += Number(movie.imdbRating));
    }, 0) / movies.length
  ).toFixed(2);
};
export const calculateTheYourAvgMoviesRate = (movies: IDetailedMovie[]) => {
  return (
    movies.reduce((acc, movie) => {
      return (acc += Number(movie.myrate));
    }, 0) / movies.length
  ).toFixed(2);
};
export const calculateMovieTime = (movies: IDetailedMovie[]) => {
  return movies.reduce((acc, movie) => {
    return (acc += parseInt(movie.Runtime));
  }, 0);
};
