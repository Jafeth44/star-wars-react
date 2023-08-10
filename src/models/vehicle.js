export default class Vehicle {
  constructor({name, model, manufacturer, costInCredits, lengthInUnits, maxAtmospheringSpeed, crew, passengers, cargoCapacity, consumables, pilots, films}) {
    this.name = name;
    this.model = model;
    this.manufacturer = manufacturer;
    this.costInCredits = costInCredits;
    this.lengthInUnits = lengthInUnits;
    this.maxAtmospheringSpeed = maxAtmospheringSpeed;
    this.crew = crew;
    this.passengers = passengers;
    this.cargoCapacity = cargoCapacity;
    this.consumables = consumables;
    this.pilots = pilots;
    this.films = films;
  }
}