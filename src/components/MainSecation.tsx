import LeftSide from "./leftside/LeftSide";
import MoviesFromSearch from "./rightside/MoviesFromSearch";

export default function MainSecation() {
  return (
    <div className="container mx-auto  flex  gap-10">
      <MoviesFromSearch />
      <LeftSide />
    </div>
  );
}
