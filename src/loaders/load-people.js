import People from '../models/people.js';

const apiPeopleMapper = (jsonObject) => {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    home_world,
    films,
    species,
    vehicles,
    starships,
    url
  } = jsonObject;

  return new People({
    name,
    height,
    weigth: mass,
    hairColor: hair_color,
    skinColor: skin_color,
    eyeColor: eye_color,
    birthYear: birth_year,
    gender,
    homeWorld: home_world,
    films: films.map(data => data.match(/\/films\/[0-9]*/)[0]),
    species: species.map(data => data.match(/\/species\/[0-9]*/)[0]),
    vehicles: vehicles.map(data => data.match(/\/vehicles\/[0-9]*/)[0]),
    starships: starships.map(data => data.match(/\/starships\/[0-9]*/)[0]),
    url: url.match(/\/people\/[0-9]*/)[0],
  })
}


export const loadPeople = async({params}) => {
  let url = await fetch(`https://swapi.dev/api/people/?${params.pageId || ''}`);
  const res = await url.json();
  const data = res.results.map(apiPeopleMapper);
  return data;
}

export const loadPerson = async({params}) => {
  const url = await fetch(`https://swapi.dev/api/people/${params.id}`);
  const res = await url.json();
  const data = apiPeopleMapper(res);
  return data;
}