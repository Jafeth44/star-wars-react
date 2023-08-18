export default class Specie {
  constructor({name, classification, designation, averageHeight, skinColors, hairColors, eyeColors, averageLifespan, homeworld, people, films, url}) {
    this.name = name;
    this.classification = classification;
    this.designation = designation;
    this.averageHeight = averageHeight;
    this.skinColors = skinColors;
    this.hairColors = hairColors;
    this.eyeColors = eyeColors;
    this.averageLifespan = averageLifespan;
    this.homeworld = homeworld;
    this.people = people;
    this.films = films;
    this.url = url;
  }
}