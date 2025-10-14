// components/WatchlistSidebar.jsx
import React from "react";
import Button from "./Button";

const WatchlistSidebar = ({ isOpen, onClose, watchlist, onRemove }) => {
  console.log("Componente abierto:", isOpen);

  return (
    <>
      {/* Fondo oscuro */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 md:w-96 bg-white shadow-2xl p-4 overflow-y-auto z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ willChange: "transform" }}
      >
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h2 className="text-lg font-bold text-blue-700">
            💖 Mi Watchlist ({watchlist.length})
          </h2>
          <Button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300"
          >
            Cerrar
          </Button>
        </div>

        {watchlist.length === 0 ? (
          <p className="text-gray-600">No hay películas en tu lista todavía.</p>
        ) : (
          <ul className="space-y-3">
            {watchlist.map((movie) => {
              const imageUrl = new URL(
                `../assets/img/${movie.image}`,
                import.meta.url
              ).href;

              return (
                <li
                  key={movie.id}
                  className="flex items-center gap-3 border-b pb-2"
                >
                  <img
                    src={imageUrl}
                    alt={movie.title}
                    className="w-16 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{movie.title}</h3>
                  </div>
                  <Button
                    onClick={() => onRemove(movie.id)}
                    className="bg-red-500 text-white hover:bg-red-600"
                  >
                    ✕
                  </Button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default WatchlistSidebar;
