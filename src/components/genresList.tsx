import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import data from "./../data.json";
import {  useHistory } from "react-router-dom";

import MoviesList from "./moviesList";

const genres = (state: any) => state.genres;

const GenresList = () => {
  const list = useSelector(genres);
  const dispatch = useDispatch();
  const history = useHistory();

  const getMovieListForGenre = (genre: string) => {
    dispatch({ type: "movie/byGenre", payload: genre });
    console.log("genenen", genre);
    history.push(`${genre}/movies`);


    
  };

  return (
    <div className="genre-list-container">
      <h1>Movie Genres</h1>
      <div className="genre-list">
        {list.genresList.map((genre: string, index: any) => {
          return (
            <div
              key={index}
              className="genre-card"
              style={{
                backgroundColor:
                  data.colors[Math.floor(Math.random() * data.colors.length)],
              }}
            >
              <span className="genre-title">
                <span className="genre-name"> Genre </span>
                <span className="genre-icon">
                  <AiOutlineDelete />
                </span>
              </span>
              <span
                className="genre-text"
                onClick={() => getMovieListForGenre(genre)}
              >
                {genre}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GenresList;

const styles = StyleSheet;
