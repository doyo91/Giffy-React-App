import React from "react";
import { Link } from "wouter";
import "./gif.css";

export const Gif = ({ title, id, url }) => {
  return (
    <div className="gif" href={`#${id}`}>
      <Link to={`/gif/${id}`} className="gif-link">
        <h4>{title}</h4>
        <img src={url} loading='lazy' alt={title} />
      </Link>
    </div>
  );
};
