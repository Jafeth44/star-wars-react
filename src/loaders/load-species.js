import Specie from '../models/specie.js';

const apiSpecieMapper = (jsonObject) => {
  const {
    name,
    classification,
    designation,
    average_height,
    skin_colors,
    hair_colors,
    eye_colors,
    average_lifespan,
    homeworld,
    people,
    films,
    url
  } = jsonObject;

  return new Specie({
    name,
    classification,
    designation,
    averageHeight: average_height,
    skinColors: skin_colors,
    hairColors: hair_colors,
    eyeColors: eye_colors,
    averageLifespan: average_lifespan,
    homeworld: homeworld,
    people: people.map(data => data.match(/\/people\/[0-9]*/)[0]),
    films: films.map(data => data.match(/\/films\/[0-9]*/)[0]),
    url: url.match(/\/species\/[0-9]*/)[0],
  })
}

export const fetchSpecies = async ({params}) => {
  const url = await fetch(`https://swapi.dev/api/species/?${params.pageId || ''}`);
  const res = await url.json();
  const data = res.results.map(apiSpecieMapper);
  return data;
};

export const fetchSpeciesSingle = async ({params}) => {
  const url = await fetch(`https://swapi.dev/api/species/${params.id}`);
  const res = await url.json();
  const data = apiSpecieMapper(res);
  return data;
};
