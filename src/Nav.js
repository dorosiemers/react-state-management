import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h3>Doros Movies</h3>
      <p>List of Movies: {movies.lengeth}</p>
    </div>
  );
};

export default Nav;
