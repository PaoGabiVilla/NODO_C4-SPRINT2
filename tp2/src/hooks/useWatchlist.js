import { useEffect, useState } from "react";

export const useWatchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(saved);
  }, []);

  const addToWatchlist = (movie) => {
    const exists = watchlist.some((m) => m.id === movie.id);
    if (!exists) {
      const updated = [...watchlist, movie];
      setWatchlist(updated);
      localStorage.setItem("watchlist", JSON.stringify(updated));
    }
  };

  const removeFromWatchlist = (id) => {
    const updated = watchlist.filter((m) => m.id !== id);
    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  const clearWatchlist = () => {
    setWatchlist([]);
    localStorage.removeItem("watchlist");
  };

  return { watchlist, addToWatchlist, removeFromWatchlist, clearWatchlist};
};
