import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import MovieCard from "./MovieCard";
import ToggleBtn from "../ui/ToggleBtn";
import { useMediaQuery, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MoviesYouWatched from "../leftside/MoviesYouWatched";

export default function MoviesFromSearch() {
  const matches = useMediaQuery("(max-width:600px)");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tempMovieData = useSelector((state: RootState) => state.movies.movies);

  const moviesList = tempMovieData.map((movie) => (
    <MovieCard key={movie.imdbID} movie={movie} />
  ));

  return (
    <div className="w-full border relative h-screen">
      {matches ? (
        <IconButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="menu"
          sx={{ position: "absolute", top: 0, right: 0, zIndex: "1000" }}
        >
          <MenuIcon />
        </IconButton>
      ) : (
        <ToggleBtn isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      )}

      <div className="overflow-auto h-full">
        {matches ? (
          isMenuOpen ? (
            <MoviesYouWatched />
          ) : (
            moviesList
          )
        ) : (
          !isCollapsed && moviesList
        )}
      </div>
    </div>
  );
}
