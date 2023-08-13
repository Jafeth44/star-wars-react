import Film from "../models/film.js";

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

export const fetchData = async () => {
  const url = await fetch("https://swapi.dev/api/films/");
  const res = await url.json();
  const data = res.results.map(apiFilmMapper);
  return data;
};

export const fetchDataSingle = async ({params}) => {
  const url = await fetch(`https://swapi.dev/api/films/${params.id}`);
  const res = await url.json();
  const data = apiFilmMapper(res);
  return data;
};