import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MovieList from "../components/MovieList";
import WatchlistModal from "../components/WatchlistModal";
import { useWatchlist } from "../hooks/useWatchlist";

const Home = () => {
  //Estados locales
  //movies → almacena las películas cargadas desde el JSON.
  const [movies, setMovies] = useState([]);
  //isModalOpen → controla si el modal de la watchlist está abierto o cerrado.
  const [isModalOpen, setIsModalOpen] = useState(false);

  // usamos el hook personalizado
  // watchlist → la lista actual. 
  // addToWatchlist() → función para agregar una película. 
  // removeFromWatchlist() → elimina una película.
  //clearWatchlist() → vacía toda la lista.
  const { watchlist, addToWatchlist, removeFromWatchlist, clearWatchlist } =
    useWatchlist();

  // cargamos las películas del JSON
  useEffect(() => {
    fetch("/data/movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Error cargando películas:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header con botón para ver la lista */}
      <Header onOpenWatchlist={() => setIsModalOpen(true)} 
        watchlistCount={watchlist.length}  
      />

      <main className="p-6">
        {/* 👇 AQUÍ MovieList */}
        <MovieList
          movies={movies}
          onAdd={addToWatchlist}
          watchlist={watchlist} // ✅ le pasamos la lista actual
        />
      </main>

      {/* Modal para ver la Watchlist */}
      {isModalOpen && (
        <WatchlistModal
          watchlist={watchlist}
          onClose={() => setIsModalOpen(false)}
          onRemove={removeFromWatchlist}
          onClear={clearWatchlist}
        />
      )}
    </div>
  );
};

export default Home;
