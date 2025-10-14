//components/MovieCard.jsx
import React from "react";
import Button from "./Button";

const MovieCard = ({ movie, onAdd, onRemove, inWatchlist }) => {
  const imageUrl = new URL(`../assets/img/${movie.image}`, import.meta.url).href;

  return (
    <div className="border rounded shadow p-2 flex flex-col bg-white transition-transform max-w-[180px]">
      <img
        src={imageUrl}
        alt={movie.title}
        className="h-36 w-full object-cover rounded"
      />
      <h3 className="mt-2 font-semibold text-sm text-center">{movie.title}</h3>
      <div className="mt-auto">
        {!inWatchlist ? (
          <Button
            onClick={() => onAdd(movie)}
            className="bg-green-500 text-white mt-2 w-full text-xs py-1"
          >
            ➕ Agregar
          </Button>
        ) : (
          <Button
            onClick={() => onRemove(movie.id)}
            className="bg-red-500 text-white mt-2 w-full text-xs py-1"
          >
            ❌ Quitar
          </Button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
