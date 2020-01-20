class City {
  constructor(name, latitude, longitude, population) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.population = population;
  }

  show() {
    return this.name + this.latitude + this.longitude + this.population; // creates a single string with the 4 attributes
  }

  movedIn(increasedResidence) {
    return (this.Population += increasedResidence);
  }

  movedOut(decreasedResidence) {
    return (this.Population -= decreasedResidence);
  }

  howBig(option) {
    if (this.population > 100000) return "City";
    if (this.population > 20000) return "Large town";
    if (this.population > 1000) return "Town";
    if (this.population > 100) return "Village";
    if (this.population > 1) return "Hamlet";
  }
}

class Community {
  constructor() {
    this.objCities = {};
    this.nextKey = 0;
  }

  whichSphere() {
    return ""; // Northern Hemisphere or Southern Hemisphere
  }

  getMostNorthern() {}

  getMostSouthern() {}

  getPopulation() {
    return; // total for all
  }

  createCity(name, latitude, longitude, population) {
    let newCity = new City(name, latitude, longitude, population);
    this.objCities[this.nextKey] = newCity;
    this.nextKey++;
    return this.nextKey - 1;
  }

  deleteCity() {}
}

export { City, Community };
