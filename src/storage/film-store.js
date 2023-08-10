import { loadFilm } from "../loaders/load-films";

const state = {
  films: [],
}

const loadFilmsInMemory = async() => {
  const films = await loadFilm();
  state.films = films; 
}

export default {
  loadFilmsInMemory,
  getFilms: () => [...state.films]
};