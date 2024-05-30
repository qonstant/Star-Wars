import React, { useState, useEffect } from "react";
import "./styles/poster.css";

const FilmWithPoster = ({ film }) => {
  const [posterPath, setPosterPath] = useState("");

  useEffect(() => {
    const fetchPosterPath = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=a696843dcb19cba1ddf454df0c93192c&query=${encodeURIComponent(
            film.title
          )}`
        );
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          setPosterPath(data.results[0].poster_path);
        }
      } catch (error) {
        console.error("Error fetching poster path:", error);
      }
    };

    fetchPosterPath();
  }, [film.title]);

  return (
    <div className="film-container">
      <div className="film-details">
        <h3>{film.title}</h3>
        <p>Director: {film.director}</p>
        <p>Release Date: {film.release_date}</p>
        <p>Episode ID: {film.episode_id}</p>
        <p>Producer: {film.producer}</p>
      </div>
      <div className="film-poster">
        {posterPath && (
          <img
            src={`https://image.tmdb.org/t/p/w200/${posterPath}`}
            alt="poster"
          />
        )}
      </div>
    </div>
  );
};

export default FilmWithPoster;
