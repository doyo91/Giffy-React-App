import React, { useState } from "react";
import {useLocation } from "wouter";

import { ListOfGifs } from "components/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import LazyTrending from "components/TrendingSearches";

export const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const { loading, gifs } = useGifs();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Navegar a otra ruta
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input
          onChange={handleChange}
          type="text"
          value={keyword}
          placeholder="Search a gif here..."
        />
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <LazyTrending />
        </div>
      </div>
    </>
  );
};
