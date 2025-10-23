import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onAdd, watchlist }) => {
  return (
    <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onAdd={onAdd}
          watchlist={watchlist}
        />
      ))}
    </section>
  );
};

export default MovieList;
