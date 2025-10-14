//hooks/useWatchlist.js
import { useState, useEffect } from "react";

export function useWatchlist() {
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem("watchlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const addMovie = (movie) => {
    if (!watchlist.find((m) => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const removeMovie = (id) => {
    setWatchlist(watchlist.filter((m) => m.id !== id));
  };

  return { watchlist, addMovie, removeMovie };
}
