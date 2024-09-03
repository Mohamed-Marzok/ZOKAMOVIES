import { ChangeEvent } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/MoviesSlice";
import { AppDispatch, RootState } from "../redux/store";

export default function Navbar() {
  const dispatch: AppDispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies.movies);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(getMovies(event.target.value));
  };

  return (
    <div className="bg-sky-700 p-4 flex flex-row items-center justify-between rounded-md md:m-4">
      <div className="flex flex-row gap-2 items-center">
        <p className="text-3xl">📺</p>
        <p className="font-bold text-xl text-white text-nowrap mr-2">
          Zoka Movies
        </p>
      </div>
      <div className="relative w-1/2 md:w-fit">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleChange(e)}
          className="w-full px-4 py-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
        />
        <FiSearch
          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
          size={20}
        />
      </div>
      <p className="text-white hidden md:block">
        Found <strong>{movies.length}</strong> results
      </p>
    </div>
  );
}
