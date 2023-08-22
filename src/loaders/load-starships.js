import Starship from '../models/starship.js';

const apiStarshipMapper = (jsonObject) => {
  const {
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    pilots,
    films,
    url,
    hyperdrive_rating,
    starship_class
  } = jsonObject;

  return new Starship({
    name,
    model,
    manufacturer,
    costInCredits: cost_in_credits,
    lengthInUnits: length,
    maxAtmospheringSpeed: max_atmosphering_speed,
    crew,
    passengers,
    cargoCapacity: cargo_capacity,
    consumables,
    pilots: pilots.map(data => data.match(/\/people\/[0-9]*/)[0]),
    films: films.map(data => data.match(/\/films\/[0-9]*/)[0]),
    url: url.match(/\/starships\/[0-9]*/)[0],
    starshipClass: starship_class,
    hyperdriveRating: hyperdrive_rating
  })
}

export const fetchStarships = async ({params}) => {
  const url = await fetch(`https://swapi.dev/api/starships/?${params.pageId || ''}`);
  const res = await url.json();
  const data = res.results.map(apiStarshipMapper);
  return data;
};

export const fetchStarshipsSingle = async ({params}) => {
  const url = await fetch(`https://swapi.dev/api/starships/${params.id}`);
  const res = await url.json();
  const data = apiStarshipMapper(res);
  return data;
};