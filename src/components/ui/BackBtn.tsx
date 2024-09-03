import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setId } from "../../redux/MoviesSlice";

export default function BackBtn() {
  const dispatch: AppDispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(setId(null))}
      className="bg-gray-500 hover:bg-gray-700 w-12 h-12 rounded-full text-white absolute top-0 left-0 text-2xl"
    >
      ←
    </button>
  );
}
