import React from "react";

export default ({
  genres,
  selectedGenre,
  nameProperty = "name",
  idProperty = "_id",
  onGenreSelect,
}) => {
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          key={genre[idProperty]}
          className={
            genre === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onGenreSelect(genre)}
          style={{ cursor: "pointer" }}
        >
          {genre[nameProperty]}
        </li>
      ))}
    </ul>
  );
};
