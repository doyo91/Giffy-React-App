import React from "react";

import "./listOfGifs.css";
import { Gif } from "../Gif";

export const ListOfGifs = ({ gifs }) => {
  return (
    <div className="list-of-gifs">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
      ))}
    </div>
  );
};
