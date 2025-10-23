import React from "react";
import Button from "./Button";

const MovieCard = ({ movie, onAdd, watchlist }) => {
  // verificamos si la película ya está en la watchlist
  const isInWatchlist = watchlist.some((m) => m.id === movie.id);

  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      {/* Imagen de la película */}
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-80 object-cover"
      />

      {/* Contenedor del título y botón */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>

        {/* Si ya está en la lista, mostramos un botón deshabilitado */}
        {isInWatchlist ? (
          <Button
            className="bg-green-700 cursor-default text-white opacity-70 w-full"
          >
            En mi lista ✓
          </Button>
        ) : (
          <Button
            onClick={() => onAdd(movie)}
            className="bg-blue-700 hover:bg-blue-900 text-white w-full"
          >
            Agregar a mi lista
          </Button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
