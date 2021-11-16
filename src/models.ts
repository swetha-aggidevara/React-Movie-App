export interface IMovie {
  id: any;
  title: string;
  year: string;
  runtime: string;
  genres: Array<string>;
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
  deleted: boolean;
  deletedGenres?: Array<string>;
};

export interface IAction {
    type: string;
    payload?: any;
}

export interface IGenre {
  deletedGenres: Array<string>,
  genresList: Array<string>
}


export interface IMovies {
  deletedMovies: Array<string>,
  moviesList: Array<IMovie>
}

export interface IFilter {
  genreTitle: string,
  movieYear: string,
  movieActor: string,
  movieDirector: string
}


export interface IState {
  genres: IGenre
  movies: IMovies,
  filters: IFilter
}