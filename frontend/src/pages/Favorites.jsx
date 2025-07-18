import React from "react";
import "../css/Favorites.css";
import { useMovieContext } from "../hooks/useMovieContext";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies</p>
    </div>
  );
};

export default Favorites;
