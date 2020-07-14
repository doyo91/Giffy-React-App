import React from "react";

import "./listOfGifs.css";
import { Gif } from "components/Gif";

export const ListOfGifs = ({ gifs }) => {
  return (
    <div className="ListOfGifs">
      {gifs.map(({ id, title, url }) => (
        <Gif key={url} id={id} title={title} url={url} />
      ))}
    </div>
  );
};
