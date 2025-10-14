//components/MovieList.jsx
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onAdd, onRemove, watchlist }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
      {movies.map((movie) => {
        const inWatchlist = watchlist.some((m) => m.id === movie.id);
        return (
          <MovieCard
            key={movie.id}
            movie={movie}
            onAdd={onAdd}
            onRemove={onRemove}
            inWatchlist={inWatchlist}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
