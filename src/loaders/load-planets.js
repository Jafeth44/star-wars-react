import Planet from '../models/planet.js';

const apiPlanetMapper = (jsonObject) => {
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    surface_water,
    population,
    residents,
    films,
    url
  } = jsonObject;

  return new Planet({
    name: name,
    rotationPeriod: rotation_period,
    orbitalPeriod: orbital_period,
    diameter,
    climate,
    gravity,
    surfaceWater: surface_water,
    population,
    residents: residents.map(data => data.match(/\/people\/[0-9]*/)[0]),
    films: films.map(data => data.match(/\/films\/[0-9]*/)[0]),
    url: url.match(/\/planets\/[0-9]*/)[0],
  })
}


export const fetchPlanets = async ({params}) => {
  const url = await fetch(`https:swapi.dev/api/planets/?${params.pageId || 'page=1'}`);
  const res = await url.json();
  const data = res.results.map(apiPlanetMapper);
  return data;
};

export const fetchPlanetSingle = async ({params}) => {
  const url = await fetch(`https://swapi.dev/api/planets/${params.id}`);
  const res = await url.json();
  const data = apiPlanetMapper(res);
  return data;
};