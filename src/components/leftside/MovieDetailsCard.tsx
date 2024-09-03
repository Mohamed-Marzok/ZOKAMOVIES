import { useDispatch } from "react-redux";
import { IDetailedMovie } from "../../interfaces";
import { setId } from "../../redux/MoviesSlice";
import { AppDispatch } from "../../redux/store";
import { getMovieById, setMovieRate } from "../../redux/movieSlice";
import IconButton from "@mui/material/IconButton";

import DeleteIcon from "@mui/icons-material/Delete";
import { removeMovieFromList } from "../../redux/yourMovieSlice";
interface IProps {
  movie: IDetailedMovie;
}

export default function MovieDetailsCard({ movie }: IProps) {
  const dispatch: AppDispatch = useDispatch();
  const hadelTheMovieClick = () => {
    dispatch(setId(movie.imdbID));
    dispatch(getMovieById(movie.imdbID));
    dispatch(setMovieRate(null));
  };
  const handleDeleteBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    dispatch(removeMovieFromList(movie.imdbID));
  };
  return (
    <div
      onClick={hadelTheMovieClick}
      className="flex flex-row gap-10 items-center mb-4 shadow-lg hover:bg-gray-200 cursor-pointer relative"
    >
      <img className="w-18 h-28" src={movie.Poster} alt={`loading...`} />
      <div className="w-full ">
        <h3 className="font-semibold text-xl mb-2">{movie.Title}</h3>
        <div className="flex justify-between  px-10 ">
          <p>⭐ {movie.imdbRating}</p>
          <p>🌟 {movie.myrate}</p>
          <p>⌛ {movie.Runtime}</p>
        </div>
      </div>
      <IconButton
        onClick={(e) => handleDeleteBtn(e)}
        sx={{ position: "absolute", right: 0 }}
        aria-label="delete"
        color="error"
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
