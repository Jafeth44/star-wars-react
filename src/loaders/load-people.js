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
    starships
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
    films,
    species,
    vehicles,
    starships
  })
}


export const loadPeople = async(page = 1) => {
  const url = `https://swapi.dev/api/people/?page=${page}`;
  const res = await fetch(url);
  const data = await res.json();
  const people = data.results.map(apiPeopleMapper);
  console.log(people);
  return people;
}
loadPeople(3)