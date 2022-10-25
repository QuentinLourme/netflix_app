import React from "react";

function DataBox({ title, poster_path, vote_average, release_date, overview }) {
  const API_IMG = "https://image.tmdb.org/t/p/w200";
  return (
    <div className="card">
      <img
        className="movie-image"
        src={API_IMG + poster_path}
        alt="affiche du film"
      />
      {/* <div className="movie-info">
        <h2 className="movie-title">{title}</h2>
        <p className="description">{overview}</p>
        <p className="note">Note : {vote_average}</p>
        <p className="release-date">Date de sortie : {release_date}</p>
      </div> */}
    </div>
  );
}

export default DataBox;
