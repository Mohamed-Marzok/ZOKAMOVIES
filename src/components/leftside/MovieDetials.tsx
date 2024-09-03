import { useSelector } from "react-redux";
import BackBtn from "../ui/BackBtn";
import { RootState } from "../../redux/store";
import Rate from "../ui/Rate";

export default function MovieDetails() {
  const movie = useSelector((state: RootState) => state.movie.movie);
  return (
    <div className="w-full relative ">
      <BackBtn />
      <div className="flex gap-8 p-4 items-center shadow-md mb-8">
        <img className="h-92 w-1/4" src={movie?.Poster} alt={movie?.Title} />
        <div className="flex flex-col space-y-4">
          <p className="text-2xl font-bold">{movie?.Title}</p>
          <p>
            {movie?.Released} - {movie?.Runtime}
          </p>
          <p>{movie?.Genre}</p>
          <p>⭐ {movie?.imdbRating} IMDb rating</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-2xl font-bold mb-2 text-purple-700">Plot :</p>
        <p className="font-medium mb-8 text-gray-700">{movie?.Plot}</p>
        <p className="text-2xl font-bold text-teal-600">Actors :</p>
        <p className="text-gray-700">{movie?.Actors}</p>
        {movie && <Rate movie={movie} />}
      </div>
    </div>
  );
}
