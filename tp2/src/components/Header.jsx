import React from "react";
import Button from "./Button";

const Header = ({ onOpenWatchlist, watchlistCount }) => {
  return (
    <header className="flex justify-between items-center p-6 bg-gray-800">
      <h1 className="text-2xl font-bold">🎬 Mi App de Películas</h1>

      <div className="relative">
        <Button
          onClick={onOpenWatchlist}
          className="bg-blue-600 hover:bg-blue-700 rounded-lg"
        >
          Ver mi lista
        </Button>

        {watchlistCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
            {watchlistCount}
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
