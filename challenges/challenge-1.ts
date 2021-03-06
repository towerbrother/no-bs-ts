const houses: House[] = [
  { name: "Atreides", planets: "Calladan" },
  { name: "Corrino", planets: ["Kaitan", "Salusa Secundus"] },
  { name: "Harkonnen", planets: ["Giedi Prime", "Arrakis"] },
];

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

function findHouses(
  input: string | House[],
  filter?: (house: House) => boolean
): HouseWithID[] {
  const houses: House[] = typeof input === "string" ? JSON.parse(input) : input;

  return (filter ? houses.filter(filter) : houses).map((house) => ({
    id: houses.indexOf(house), // I could have used another method for generating a unique ID
    ...house,
  }));
}

console.log(findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides"));
console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
console.log(findHouses(houses, ({ planets }) => planets[0] === "Kaitan"));
console.log(findHouses(houses));
