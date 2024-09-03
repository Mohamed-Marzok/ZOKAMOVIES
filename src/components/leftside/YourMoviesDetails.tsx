import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  calculateMovieTime,
  calculateTheAvgMoviesRate,
  calculateTheYourAvgMoviesRate,
} from "../../utils/funcations";

export default function YourMoviesDetails() {
  const movies = useSelector((state: RootState) => state.yourMovie.movies);
  const avgRate = calculateTheAvgMoviesRate(movies);
  const yourAvgRate = calculateTheYourAvgMoviesRate(movies);
  const moviesTime = calculateMovieTime(movies);
  return (
    <div className=" w-full  p-4 mb-5 shadow-md shadow-sky-200">
      <h2 className="font-semibold text-2xl mb-2">Movies You Watched</h2>
      <div className="flex justify-between">
        <p>{movies.length} Movies</p>
        <p>⭐ {avgRate}</p>
        <p>🌟 {yourAvgRate}</p>
        <p>{moviesTime} Min</p>
      </div>
    </div>
  );
}
