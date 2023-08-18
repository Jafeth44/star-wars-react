export default class Planet {
  constructor({name, rotationPeriod, orbitalPeriod, diameter, climate, gravity, terrain, surfaceWater, population, residents, films, url}) {
    this.name = name;
    this.rotationPeriod = rotationPeriod;
    this.orbitalPeriod = orbitalPeriod;
    this.diameter = diameter;
    this.climate = climate;
    this.gravity = gravity;
    this.terrain = terrain;
    this.surfaceWater = surfaceWater;
    this.population = population;
    this.residents = residents;
    this.films = films;
    this.url = url;
  }
}