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
    species,
    url
  } = jsonObject;
  

  return new Film({
    title,
    episodeID: episode_id,
    openingCrawl: opening_crawl,
    director,
    releaseDate: release_date,
    characters: characters.map(data => data.match(/\/people\/[0-9]*/)[0]),
    planets: planets.map(data => data.match(/\/planets\/[0-9]*/)[0]),
    starships: starships.map(data => data.match(/\/starships\/[0-9]*/)[0]),
    vehicles: vehicles.map(data => data.match(/\/vehicles\/[0-9]*/)[0]),
    species: species.map(data => data.match(/\/species\/[0-9]*/)[0]),
    url: url.match(/\/films\/[0-9]*/)[0],
  })
};

export const fetchFilms = async () => {
  const url = await fetch("https://swapi.dev/api/films/");
  const res = await url.json();
  const data = res.results.map(apiFilmMapper);
  return data;
};


export const fetchFilmSingle = async ({params}) => {
  const url = await fetch(`https://swapi.dev/api/films/${params.id}`);
  const res = await url.json();
  const data = apiFilmMapper(res);
  return data;
};
