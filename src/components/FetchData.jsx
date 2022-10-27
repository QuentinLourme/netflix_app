import { useState, useEffect } from "react";
import DataBox from "./DataBox";
import Filter from "./Filter";

function FetchData(props) {
  const API_URL = `https://api.themoviedb.org/3/${props.comp}/popular?api_key=e4f8fe5d8aaebdd3ee69b55f54a0110a`;

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [query, setQuery] = useState("");
  const [checkMovie, setCheckMovie] = useState(true);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/${props.comp}/popular?api_key=e4f8fe5d8aaebdd3ee69b55f54a0110a`
    );
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/${props.comp}?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`
      );
      const data = await res.json();
      if (data.results === undefined) {
        setCheckMovie(true);
        fetchPopular();
      }
      if (data.results.length === 0) {
        setCheckMovie(false);
      } else {
        setCheckMovie(true);
        setFiltered(data.results);
      }
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
        <button type="submit">Go</button>
      </form>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <div className="movie-container">
        {checkMovie ? (
          filtered.map((index) => {
            return <DataBox key={index.id} {...index} />;
          })
        ) : (
          <p>Pas de résultat</p>
        )}
      </div>
    </div>
  );
}

export default FetchData;
