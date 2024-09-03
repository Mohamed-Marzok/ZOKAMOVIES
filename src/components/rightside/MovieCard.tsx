import { useDispatch, useSelector } from "react-redux";
import { IBaseMovie, IDetailedMovie } from "../../interfaces";
import { setId } from "../../redux/MoviesSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { getMovieById, setMovieRate } from "../../redux/movieSlice";
interface IProps {
  movie: IDetailedMovie | IBaseMovie;
}
export default function MovieCard({ movie }: IProps) {
  const dispatch: AppDispatch = useDispatch();
  const movieId = useSelector((state: RootState) => state.movies.id);
  const hadelTheMovieClick = () => {
    dispatch(setId(movie.imdbID));
    dispatch(getMovieById(movie.imdbID));
    dispatch(setMovieRate(null));
  };
  return (
    <div
      key={movie.imdbID}
      onClick={hadelTheMovieClick}
      className={`flex flex-row gap-10 items-center mb-4 shadow-lg hover:bg-gray-200 cursor-pointer ${
        movieId === movie.imdbID
          ? "bg-gray-500 hover:bg-gray-500 text-white"
          : ""
      } `}
    >
      <img className="w-24 h-28 " src={movie.Poster} alt={`loading...`} />
      <div>
        <h3 className="font-semibold text-xl mb-2">{movie.Title}</h3>
        <p>📅 {movie.Year}</p>
      </div>
    </div>
  );
}
