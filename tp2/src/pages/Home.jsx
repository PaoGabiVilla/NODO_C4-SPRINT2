//page/Home.jsx
import React from "react";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies.json";
import useWatchlist from "../hooks/useWatchlist";

const Home = () => {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        🎞️ Todas las Películas
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onAdd={addToWatchlist}
            onRemove={removeFromWatchlist}
            inWatchlist={watchlist.some((m) => m.id === movie.id)}
          />
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-center text-green-600">
        ✅ Mi Watchlist
      </h2>

      {watchlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {watchlist.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onAdd={addToWatchlist}
              onRemove={removeFromWatchlist}
              inWatchlist={true}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Todavía no agregaste películas.</p>
      )}
    </div>
  );
};

export default Home;
