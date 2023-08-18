import Vehicle from "./vehicle.js";

export default class Starship extends Vehicle {
  constructor({starshipClass, hyperdriveRating, ...args}) {
    super({...args});
    this.hyperdriveRating = hyperdriveRating;
    this.starshipClass = starshipClass;
  }
}