import { IAction } from "./../models";

const initialState = {
  genreTitle: "",
  movieYear: "",
  movieActor: "",
  movieDirector: "",
};

const filterReducer = (state = initialState, action: IAction) => {
    
  switch (action.type) {
    case "filter/byGenreTitle":
      return {
        ...state,
        genreTitle: action.payload,
      };
    case "filter/byMovieYear":
      return {
        ...state,
        movieYear: action.payload,
      };
    case "filter/byMovieActor":
      return {
        ...state,
        movieActor: action.payload,
      };
    case "filter/byMovieDirector":
      return {
        ...state,
        movieDirector: action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
