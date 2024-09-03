import { useSelector } from "react-redux";
import MovieDetails from "./leftside/MovieDetials";
import MoviesFromSearch from "./rightside/MoviesFromSearch";
import { RootState } from "../redux/store";

export default function MainSecationPhone() {
  const movieId = useSelector((state: RootState) => state.movies.id);

  return (
    <div className="container mx-auto  flex  gap-10">
      {!movieId && <MoviesFromSearch />}
      {movieId && <MovieDetails />}
    </div>
  );
}
