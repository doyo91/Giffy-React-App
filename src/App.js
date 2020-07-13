import React from "react";

import { Route, Link } from "wouter";

import "./App.css";

import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";

import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { SearchResults } from "./pages/SearchResults";

export const App = () => {
  return (
    <StaticContext.Provider value={{ name: "sam", suscribete: true }}>
      <div className="app">
        <section className="app-content">
          <Link to="/">
            <img className="app-logo" src="./logo.png" alt="Giffy logo" />
          </Link>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
};
