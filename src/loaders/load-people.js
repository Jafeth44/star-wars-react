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


export const loadPeople = async({params}) => {
  let url = (`https://swapi.dev/api/people/?page=`);
  if (typeof params.id === 'undefined') {
    params.id = 1;
    url = await fetch(url+1); 
  } else {
    url = await fetch(url+params.id);
  }
  const res = await url.json();
  const data = res.results.map(apiPeopleMapper);
  return data;
}

export const loadPerson = async({params}) => {
  const pageNum = parseInt(params.pageId);
  let personNum = parseInt(params.personId);
  pageNum == 1 ? 
    personNum : 
  pageNum == 2 ? 
    personNum + 10 :
  pageNum == 3 ?
    personNum + 20 :
  pageNum == 4 ?
    personNum + 30 :
  pageNum == 5 ? 
    personNum + 40 :
    ''

  const url = await fetch(`https://swapi.dev/api/people/${params.personId}`);
  const res = await url.json();
  const data = apiPeopleMapper(res);
  return data;
}