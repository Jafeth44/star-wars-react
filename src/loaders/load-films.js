import  Film  from "../models/film.js";

export const apiFilmMapper = (jsonObject) => {
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
