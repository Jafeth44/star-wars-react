import  Film  from "../models/film.js";

const apiFilmMapper = (jsonObject) => {
  const {
    title,
    episode_id,
    opening_crawl,
    director,
    release_date,
    characters,
    planets,
    starships,
    vehicles,
    species
  } = jsonObject;

  return new Film({
    title,
    episodeID: episode_id,
    openingCrawl: opening_crawl,
    director,
    releaseDate: release_date,
    characters,
    planets,
    starships,
    vehicles,
    species
  })
};


export const loadFilm = async() => {
  const url = `https://swapi.dev/api/films/`;
  const res = await fetch(url);
  const data = await res.json();
  const films = data.results.map(apiFilmMapper);
  return films;
}