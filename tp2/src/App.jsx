// App.jsx
import React, { useState } from "react";
import movies from "./data/movies.json";
import MovieCard from "./components/MovieCard";
import { useWatchlist } from "./hooks/useWatchlist";
import Button from "./components/Button";
import WatchlistSidebar from "./components/WatchlistSidebar";

function App() {
  const { watchlist, addMovie, removeMovie } = useWatchlist();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    console.log("➡️ Abriendo sidebar...");
    setIsModalOpen(true);
  };

  const closeSidebar = () => {
    console.log("❌ Cerrando sidebar...");
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-gray-100 p-8 overflow-visible">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700">
          🎬 Catálogo de Películas
        </h1>

        <Button
          onClick={openSidebar}
          className="bg-blue-600 text-white hover:bg-blue-700"
        >
          Ver mi lista ({watchlist.length})
        </Button>
      </div>

      {/* SECCIÓN GENERAL */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Todas las películas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onAdd={addMovie}
              onRemove={removeMovie}
              inWatchlist={watchlist.some((m) => m.id === movie.id)}
            />
          ))}
        </div>
      </section>

      {/* SIDEBAR DE WATCHLIST */}
      <WatchlistSidebar
        isOpen={isModalOpen}
        onClose={closeSidebar}
        watchlist={watchlist}
        onRemove={removeMovie}
      />
    </div>
  );
}

export default App;
