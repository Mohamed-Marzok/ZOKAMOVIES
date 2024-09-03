import MoviesYouWatched from "./MoviesYouWatched";
import MovieDetials from "./MovieDetials";
import ToggleBtn from "../ui/ToggleBtn";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function LeftSide() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const movieId = useSelector((state: RootState) => state.movies.id);
  return (
    <div className="w-full relative">
      <ToggleBtn isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      {!isCollapsed && <>{movieId ? <MovieDetials /> : <MoviesYouWatched />}</>}
    </div>
  );
}
