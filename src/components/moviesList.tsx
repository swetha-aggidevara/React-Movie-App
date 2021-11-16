import { useSelector } from "react-redux";
import { IMovie } from "../models";
import MoviesListItem from "./movieListItem";

const movies = (state: any) => state.movies;

const MoviesList = () => {
  const list = useSelector(movies);
  return (
    <div>
      {list.moviesList.map((movie: IMovie) => {
        return <MoviesListItem key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default MoviesList;
