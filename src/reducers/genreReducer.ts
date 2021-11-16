// import { compact } from "lodash";
import { IAction } from "./../models";
import data from "./../data.json";

const initialState = {
  genresList: data.genres.genresList,
  deletedGenres: data.genres.deletedGenres,
};

const genreReducer = (
  state = initialState,
  action: IAction
) => {
  switch (action.type) {
    case "create/genre":
      return {
        ...state,
        genresList: [...state.genresList, action.payload],
      };
    case "delete/genre":
      // let genres = data.genres.genresList;
      // const deletedGenres: any[] = [];
      // genres = genres.filter((genre) => {
      //   if (genre === action.payload) {
      //     deletedGenres.push(genre);
      //   } else {
      //     return genre;
      //   }
      //   return null;
      // });
      
      // genres = compact(genres);
      return {
        ...state,
        genresList: state.genresList.filter((genre) => genre !== action.payload),
        deletedGenres: [...state.deletedGenres, action.payload],
      };
    case "restore/genre":
      return {
        ...state,
        genresList: [...state.genresList, action.payload],
        deletedGenres: state.deletedGenres.filter((genre) => genre !== action.payload),
      };
    default:
      return state;
  }
};

export default genreReducer;
