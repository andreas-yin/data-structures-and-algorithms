class City {
  constructor(name) {
    this.name = name;
    this.routes = new Map();
  }

  addRoute(city, price) {
    this.routes.set(city, price);
  }
}

// Dijkstra's algorithm
const dijkstraShortestPath = (startingCity, finalDestination) => {
  const cheapestPricesTable = {};
  const cheapestPreviousStopoverCityTable = {};

  let unvisitedCities = [];
  const visitedCities = {};

  cheapestPricesTable[startingCity.name] = 0;

  let currentCity = startingCity;

  while (currentCity) {
    visitedCities[currentCity.name] = true;
    unvisitedCities = unvisitedCities.filter(
      (city) => city.name !== currentCity.name
    );

    currentCity.routes.forEach((price, adjacentCity) => {
      if (!visitedCities[adjacentCity.name]) {
        unvisitedCities.push(adjacentCity);
      }

      const priceThroughCurrentCity =
        cheapestPricesTable[currentCity.name] + price;

      if (
        !cheapestPricesTable[adjacentCity.name] ||
        priceThroughCurrentCity < cheapestPricesTable[adjacentCity.name]
      ) {
        cheapestPricesTable[adjacentCity.name] = priceThroughCurrentCity;
        cheapestPreviousStopoverCityTable[adjacentCity.name] = currentCity.name;
      }
    });

    currentCity = unvisitedCities.sort(
      (a, b) => cheapestPricesTable[a.name] - cheapestPricesTable[b.name]
    )[0];
  }

  const shortestPath = [];
  let currentCityName = finalDestination.name;

  while (currentCityName !== startingCity.name) {
    shortestPath.push(currentCityName);
    currentCityName = cheapestPreviousStopoverCityTable[currentCityName];
  }

  shortestPath.push(startingCity.name);

  return shortestPath.reverse();
};

// Example graph
const atlanta = new City('Atlanta');
const boston = new City('Boston');
const chicago = new City('Chicago');
const denver = new City('Denver');
const elPaso = new City('El Paso');

atlanta.addRoute(boston, 100);
atlanta.addRoute(denver, 160);
boston.addRoute(chicago, 120);
boston.addRoute(denver, 180);
chicago.addRoute(elPaso, 80);
denver.addRoute(chicago, 40);
denver.addRoute(elPaso, 140);

dijkstraShortestPath(atlanta, elPaso);
