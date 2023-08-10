import Vehicle from "./vehicle";

export default class Starship extends Vehicle {
  constructor({hyperdriveRating, starshipClass}) {
    super();
    this.hyperdriveRating = hyperdriveRating;
    this.starshipClass = starshipClass;
  }
}