import { useState, useEffect } from "react";
import DataBox from "./DataBox";

function FetchData() {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=e4f8fe5d8aaebdd3ee69b55f54a0110a";

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <form onSubmit={searchMovie}>
        <input
          type="text"
          placeholder="Chercher un film"
          onChange={changeHandler}
        />
        <button type="submit">Recherche</button>
      </form>
      <div className="movie-container">
        {movies.map((index) => (
          <DataBox key={index.id} {...index} />
        ))}
      </div>
    </div>
  );
}

export default FetchData;
