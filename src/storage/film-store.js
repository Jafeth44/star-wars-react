import { loadFilm } from "../loaders/load-films";

let filmsInMemory;

export const loadFilmsInMemory = async() => {
  if (filmsInMemory) return;
  const films = await loadFilm();
  filmsInMemory = films; 
}



export const getFilms = () => [...filmsInMemory];
