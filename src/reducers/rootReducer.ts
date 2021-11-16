// import data from "../data.json";
import genreReducer from "./genreReducer";
import filterReducer from "./filterReducer";
import movieReducer from "./movieReducer";
import {combineReducers} from 'redux'

// const initialState = {
//   genres: data.genres,
//   filters: data.filters,
//   movies: data.movies
// };


const appReducer = combineReducers({
  genres: genreReducer,
  filters: filterReducer,
  movies: movieReducer
})

// const rootReducer = (state: IState, action: IAction) => {
//   return appReducer(state, action);
// };

export default appReducer;
