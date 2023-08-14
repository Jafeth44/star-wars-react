export default class Film {
  constructor({title, episodeID, openingCrawl, director, releaseDate, characters, planets, starships, vehicles, species, url}) {
    this.title = title; 
    this.episodeID = episodeID; 
    this.openingCrawl = openingCrawl; 
    this.director = director; 
    this.releaseDate = releaseDate; 
    this.characters = characters; 
    this.planets = planets;
    this.starships = starships; 
    this.vehicles = vehicles; 
    this.species = species;
    this.url = url;
  }
}