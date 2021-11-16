import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import GenresList from "./components/genresList";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MoviesList from "./components/moviesList";

function App() {
  return (
    <div>
      <Provider store={store}>
        <div className="App">
          <GenresList />
        </div>
      </Provider>

      <Router>
          <Route path="/:genreName/movies" component={MoviesList}></Route>
      </Router>
    </div>
  );
}

export default App;
