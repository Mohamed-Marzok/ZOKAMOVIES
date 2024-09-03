export interface IBaseMovie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface IDetailedMovie extends IBaseMovie {
  Runtime: string;
  imdbRating: number;
  userRating: number;
  Released: string;
  Genre: string;

  Plot: string;
  Actors: string;
  myrate: number;
}
