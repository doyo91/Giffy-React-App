import React from "react";
import { Link } from "wouter";
import "./gif.css";

export const Gif = ({ title, id, url }) => {
  return (
    <div className="Gif" href={`#${id}`}>
      <Link to={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img src={url} loading='lazy' alt={title} />
      </Link>
    </div>
  );
};
