import { useSelector } from "react-redux";

import YourMoviesDetails from "./YourMoviesDetails";
import { RootState } from "../../redux/store";
import { IDetailedMovie } from "../../interfaces";
import MovieDetailsCard from "./MovieDetailsCard";

export default function MoviesYouWatched() {
  const yourMoviesList = useSelector((state: RootState) =>
    [...state.yourMovie.movies].reverse()
  );

  const movieList = yourMoviesList.map((movie: IDetailedMovie) => (
    <MovieDetailsCard key={movie.imdbID} movie={movie} />
  ));

  return (
    <div className="grow relative">
      <YourMoviesDetails />
      <div>{movieList}</div>
    </div>
  );
}
