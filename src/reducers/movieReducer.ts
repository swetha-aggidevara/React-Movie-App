import { IAction, IMovie } from "./../models";
import { v4 } from "uuid";
import data from "./../data.json";
import { compact } from "lodash";

const initialState = {
  moviesList: data.movies.moviesList,
  deletedMovies: data.movies.deletedMovies,
  movie: {},
};

const getActiveMovies = (list: IMovie[]) => {
  return list.filter((movie) => !movie.deleted);
};

const movieReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "movie/create":
      return {
        ...state,
        moviesList: [
          ...state.moviesList,
          {
            id: v4(),
            title: action.payload.title,
            year: action.payload.year,
            runtime: action.payload.runtime,
            genres: action.payload.genres,
            director: action.payload.director,
            actors: action.payload.actors,
            plot: action.payload.plot,
            posterUrl: action.payload.url,
            deleted: false,
            deletedFromGenres: [],
          },
        ],
      };
    case "movie/read":
      return {
        ...state,
        movie: state.moviesList.filter(
          (movies) => movies.id === action.payload.id
        ),
      };
    case "movie/update":
      const updatedMovieList = state.moviesList.map((movie) => {
        if (movie.id === action.payload.id) {
          movie.title = action.payload.title;
          return movie;
        }
        return movie;
      });
      return {
        ...state,
        moviesList: updatedMovieList,
      };
    case "movie/delete":
      let deletedId;
      const movieListAfterDelete = state.moviesList.map((movie) => {
        if (movie.id === action.payload.id) {
          movie.deleted = true;
          deletedId = movie.id;
          return movie;
        }
        return movie;
      });
      return {
        ...state,
        moviesList: getActiveMovies(movieListAfterDelete),
        deletedMovies: [...state.deletedMovies, deletedId],
      };
    case "movie/deleteFromGenre":
      const movieListAfterGenreDelete = state.moviesList.map((movie) => {
        if (movie.id === action.payload.id) {
          movie.genres = action.payload.genres;
          return movie;
        }
        return movie;
      });
      return {
        ...state,
        moviesList: getActiveMovies(movieListAfterGenreDelete),
      };
    case "movie/restoreMovie":
      const movieListAfterRestore = data.movies.moviesList.filter((movie) => {
        if (movie.id === action.payload.id) {
          movie.deleted = false;
          return movie;
        }
        return movie;
      });
      return {
        ...state,
        moviesList: getActiveMovies(movieListAfterRestore),
        deletedMovies: state.deletedMovies.filter(
          (id) => id !== action.payload.id
        ),
      };
    case "movie/byGenre":
      const movies: IMovie[] = data.movies.moviesList;
      let list = movies.map((movie: IMovie) => {
        if (movie.genres.includes(action.payload)) {
          return movie;
        }
        return null;
      });

      const moviesByGenre: IMovie[] = compact(list);

      return {
        ...state,
        moviesList: getActiveMovies(moviesByGenre),
      };
    case "movie/byActor":
      const moviesByActorWise: IMovie[] = data.movies.moviesList;
      let moviesActor = moviesByActorWise.map((movie: IMovie) => {
        if (movie.actors.includes(action.payload)) {
          return movie;
        }
        return null;

      });

      const moviesByActor = compact(moviesActor);

      return {
        ...state,
        moviesList: getActiveMovies(moviesByActor),
      };
    case "movie/byDirector":
      const moviesByDirectorWise: IMovie[] = data.movies.moviesList;
      let moviesDirector = moviesByDirectorWise.map((movie: IMovie) => {
        if (movie.director.includes(action.payload)) {
          return movie;
        }
        return null;

      });

      const moviesByDirector = compact(moviesDirector);

      return {
        ...state,
        moviesList: getActiveMovies(moviesByDirector),
      };
    case "movie/byYear":
      const movieByYear: IMovie[] = data.movies.moviesList;
      let listYear = movieByYear.map((movie: IMovie) => {
        if (movie.year === action.payload) {
          return movie;
        }
        return null;

      });

      const listByYear = compact(listYear);

      return {
        ...state,
        moviesList: getActiveMovies(listByYear),
      };
    default:
      return state;
  }
};

export default movieReducer;
