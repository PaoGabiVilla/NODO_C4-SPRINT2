import React from "react";
import Button from "./Button";

const WatchlistModal = ({ watchlist, onClose, onRemove, onClear }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-gray-900 p-6 rounded-2xl max-w-lg w-full shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">🎥 Mi Watchlist</h2>

        {watchlist.length === 0 ? (
          <p className="text-gray-400">Tu lista está vacía 😔</p>
        ) : (
          <ul className="space-y-4">
            {watchlist.map((movie) => (
              <li
                key={movie.id}
                className="flex justify-between items-center border-b border-gray-700 pb-2"
              >
                <span>{movie.title}</span>

                {/* Botón: Eliminar */}
                <Button
                  onClick={() => onRemove(movie.id)}
                  className="bg-red-600 hover:bg-red-800 text-white"
                >
                  Eliminar
                </Button>
              </li>
            ))}
          </ul>
        )}

        <div className="flex justify-between mt-6">
          {watchlist.length > 0 && (
            <>
              {/* Botón: Vaciar lista */}
              <Button
                onClick={() => {
                  const confirmed = window.confirm("¿Estás seguro de que quieres eliminar toda la lista?");
                  if (confirmed) onClear();
                }}
                className="bg-red-700 hover:bg-red-900 text-white"
              >
                Vaciar lista
              </Button>
            </>
          )}

          {/* Botón: Cerrar */}
          <Button
            onClick={onClose}
            className="bg-gray-700 hover:bg-gray-600 text-white ml-auto"
          >
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WatchlistModal;
