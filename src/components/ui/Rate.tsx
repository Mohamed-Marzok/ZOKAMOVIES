import Rating from "@mui/material/Rating";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setMovieRate } from "../../redux/movieSlice";
import { IDetailedMovie } from "../../interfaces";
import { addToYourMovieList } from "../../redux/yourMovieSlice";
import { setId } from "../../redux/MoviesSlice";
interface IProps {
  movie: IDetailedMovie | null;
}
export default function Rate({ movie }: IProps) {
  console.log(movie);
  const rate = useSelector((state: RootState) => state.movie.movieRate);
  const dispatch: AppDispatch = useDispatch();
  const handleAddClick = () => {
    dispatch(addToYourMovieList({ rate, movie }));
    dispatch(setId(null));
  };
  return (
    <div className="bg-gray-100  w-fit mx-auto px-2 py-8 mt-8 md:px-16 rounded-lg shadow-sm shadow-sky-400 flex flex-col">
      <Rating
        sx={{ mb: 3 }}
        name="simple-controlled"
        max={10}
        value={rate}
        disabled={Boolean(rate)}
        precision={0.5}
        onChange={(_, newValue) => {
          dispatch(setMovieRate(newValue));
        }}
      />

      {rate && (
        <Button
          onClick={handleAddClick}
          variant="outlined"
          startIcon={<AddIcon />}
        >
          add
        </Button>
      )}
    </div>
  );
}
