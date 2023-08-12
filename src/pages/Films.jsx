import { useState, useEffect } from "react";
import FilmsCard from "../components/FilmsCard";
import { apiFilmMapper } from "../loaders/load-films";
import '../styles/film-card.css';

export const Films = () => {
  const [films, setFilms] = useState(Array());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("mounted");
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("mounted");
    setLoading(true);
    await fetch("https://swapi.dev/api/films/")
      .then((response) => response.json())
      .then((data) => {
        setFilms(data.results.map(apiFilmMapper));
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error: " + error);
        setLoading(false);
      });
  };

  return (
    <div className="film-container">
      {loading ? (
        <h2 className="loading">Loading...</h2>
      ) : (
        films.map((data, id) => (
          <FilmsCard
            key={id}
            title={data.title}
            director={data.director}
            epidoseID={data.episodeID}
            img={id}
          />
        ))
      )}
    </div>
  );
};
