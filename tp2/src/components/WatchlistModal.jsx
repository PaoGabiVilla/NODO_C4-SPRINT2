// components/WatchlistModal.jsx
import React from "react";
import Button from "./Button";

const WatchlistModal = ({ isOpen, onClose, watchlist, onRemove }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Fondo oscuro */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      {/* Contenedor del modal */}
      <div className="relative bg-white w-11/12 md:w-2/3 max-h-[80vh] overflow-y-auto p-6 rounded-lg shadow-lg z-50">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-blue-700">
            💖 Mi Watchlist ({watchlist.length})
          </h2>
          <Button onClick={onClose} className="bg-gray-300 hover:bg-gray-400">
            Cerrar
          </Button>
        </div>

        {watchlist.length === 0 ? (
          <p className="text-gray-600">No hay películas en tu lista todavía.</p>
        ) : (
          <ul className="space-y-4">
            {watchlist.map((movie) => {
              const imageUrl = new URL(
                `../assets/img/${movie.image}`,
                import.meta.url
              ).href;

              return (
                <li
                  key={movie.id}
                  className="flex items-center gap-4 border-b pb-2"
                >
                  <img
                    src={imageUrl}
                    alt={movie.title}
                    className="w-20 h-28 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{movie.title}</h3>
                  </div>
                  <Button
                    onClick={() => onRemove(movie.id)}
                    className="bg-red-500 text-white hover:bg-red-600"
                  >
                    Quitar
                  </Button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WatchlistModal;
